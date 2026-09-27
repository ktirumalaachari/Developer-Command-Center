import React from 'react';
import { motion } from 'framer-motion';

interface PageContainerProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  action,
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="p-3.5 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-4 sm:space-y-6 select-none"
    >
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pb-3 border-b border-white/10">
        <div>
          <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white">{title}</h2>
          {description && <p className="text-xs text-slate-300 mt-1 font-mono leading-relaxed">{description}</p>}
        </div>
        {action && <div className="flex items-center gap-2 sm:gap-3 flex-wrap">{action}</div>}
      </div>

      {/* Main Content Area */}
      <div className="min-w-0">{children}</div>
    </motion.div>
  );
};
