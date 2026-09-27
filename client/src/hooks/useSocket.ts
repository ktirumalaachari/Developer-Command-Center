import { useEffect, useState, useRef, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export interface ActivityEvent {
  type: string;
  action: string;
  title: string;
  description?: string;
  actor: string;
  actorAvatar?: string;
  repositoryId?: string;
  repositoryName?: string;
  timestamp: string;
  metadata?: any;
}

const socketBaseUrl =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? "http://localhost:5000" : window.location.origin);

export const useSocket = (
  onActivityReceived?: (event: ActivityEvent) => void,
) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastEvent, setLastEvent] = useState<ActivityEvent | null>(null);

  const socketRef = useRef<Socket | null>(null);

  // Keep the latest callback without recreating the socket.
  const callbackRef = useRef(onActivityReceived);

  useEffect(() => {
    callbackRef.current = onActivityReceived;
  }, [onActivityReceived]);

  useEffect(() => {
    const socket = io(socketBaseUrl, {
      withCredentials: true,
      transports: ["websocket", "polling"],
    });

    socketRef.current = socket;

    const handleConnect = () => {
      console.log(
        "⚡ [Socket.IO] Connected to backend event stream. Socket ID:",
        socket.id,
      );
      setIsConnected(true);
    };

    const handleDisconnect = (reason: string) => {
      console.log(
        "❌ [Socket.IO] Disconnected from backend stream. Reason:",
        reason,
      );
      setIsConnected(false);
    };

    const handleActivity = (event: ActivityEvent) => {
      setLastEvent(event);
      callbackRef.current?.(event);
    };

    socket.on("connect", handleConnect);
    socket.on("disconnect", handleDisconnect);
    socket.on("activity_stream", handleActivity);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("disconnect", handleDisconnect);
      socket.off("activity_stream", handleActivity);

      socket.disconnect();

      if (socketRef.current === socket) {
        socketRef.current = null;
      }
    };
  }, []);

  const emitActivity = useCallback(
    (event: Omit<ActivityEvent, "timestamp">) => {
      if (socketRef.current?.connected) {
        socketRef.current.emit("activity_event", {
          ...event,
          timestamp: new Date().toISOString(),
        });
      }
    },
    [],
  );

  return {
    isConnected,
    lastEvent,
    emitActivity,
  };
};
