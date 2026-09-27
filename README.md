# ⚡ Developer Command Center — Real-Time Engineering Productivity & Telemetry SaaS
<div align="center">

![Developer Command Center Banner](https://img.shields.io/badge/DEVELOPER%20COMMAND%20CENTER-ENTERPRISE%20EDITION-6366F1?style=for-the-badge&labelColor=090D16)

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL%20(Neon)-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Google Gemini](https://img.shields.io/badge/AI%20Engine-Gemini%201.5%20Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

**A mission-control observability suite for software engineering teams. Unifies GitHub telemetry, live DORA metrics, CI/CD pipeline health, and automated AI code reviews into a high-performance cyber-aesthetic dashboard.**

[🚀 Quick Start](#-step-by-step-installation--local-setup) • [🔑 All 7+ Environment Variables Guide](#-environment-variables-setup-guide) • [🛠️ Tech Stack](#-technology-stack) • [🏛️ Architecture](#-system-architecture) • [🎨 Personalization Guide](#-clone--personalization-checklist)

</div>

---

## 📑 Table of Contents

- [⚡ Developer Command Center — Real-Time Engineering Productivity \& Telemetry SaaS](#-developer-command-center--real-time-engineering-productivity--telemetry-saas)
  - [📑 Table of Contents](#-table-of-contents)
  - [🌟 Executive Summary \& Key Features](#-executive-summary--key-features)
  - [🛠️ Technology Stack](#️-technology-stack)
    - [Frontend Ecosystem](#frontend-ecosystem)
    - [Backend \& Core Services](#backend--core-services)
    - [Cloud Infrastructure \& DevOps](#cloud-infrastructure--devops)
  - [🏛️ System Architecture](#️-system-architecture)
  - [📁 Repository Structure](#-repository-structure)
  - [🔑 Environment Variables Setup Guide](#-environment-variables-setup-guide)
    - [Summary Matrix](#summary-matrix)
    - [Step-by-Step Instructions to Obtain Every Key](#step-by-step-instructions-to-obtain-every-key)
      - [1. `DATABASE_URL` (Neon Serverless PostgreSQL)](#1-database_url-neon-serverless-postgresql)
      - [2. `JWT_SECRET`](#2-jwt_secret)
      - [3. `ENCRYPTION_KEY` (32-byte Hex)](#3-encryption_key-32-byte-hex)
      - [4. `GITHUB_CLIENT_ID` \& `GITHUB_CLIENT_SECRET` (GitHub OAuth)](#4-github_client_id--github_client_secret-github-oauth)
      - [5. `GOOGLE_CLIENT_ID` \& `GOOGLE_CLIENT_SECRET` (Google OAuth 2.0)](#5-google_client_id--google_client_secret-google-oauth-20)
      - [6. `GEMINI_API_KEY` (Google AI Studio)](#6-gemini_api_key-google-ai-studio)
      - [7. `GITHUB_WEBHOOK_SECRET`](#7-github_webhook_secret)
      - [8. `ALLOWED_GITHUB_USERS` (Access Control)](#8-allowed_github_users-access-control)
      - [9. Frontend Environment Variable (`client/.env`)](#9-frontend-environment-variable-clientenv)
    - [Complete Example `server/.env` File](#complete-example-serverenv-file)
  - [💻 Step-by-Step Installation \& Local Setup](#-step-by-step-installation--local-setup)
    - [1. Prerequisites Check](#1-prerequisites-check)
    - [2. Clone the Repository](#2-clone-the-repository)
    - [3. Setup Backend Server](#3-setup-backend-server)
    - [4. Setup Frontend Client (In a New Terminal)](#4-setup-frontend-client-in-a-new-terminal)
  - [🎨 Clone \& Personalization Checklist](#-clone--personalization-checklist)
  - [📡 API Endpoints Reference](#-api-endpoints-reference)
    - [🔐 Authentication (`/api/auth`)](#-authentication-apiauth)
    - [📊 DORA \& Telemetry (`/api/dora`, `/api/github`)](#-dora--telemetry-apidora-apigithub)
    - [🤖 AI Engineering Intelligence (`/api/ai`)](#-ai-engineering-intelligence-apiai)
    - [🚀 CI/CD \& Deployments (`/api/deployments`)](#-cicd--deployments-apideployments)
  - [🚀 Production Deployment Guide](#-production-deployment-guide)
    - [Deploying the Backend on Render](#deploying-the-backend-on-render)
    - [Deploying the Frontend on Vercel](#deploying-the-frontend-on-vercel)
  - [� License](#-license)
  - [👨‍💻 Author \& Connect](#-author--connect)

---

## 🌟 Executive Summary & Key Features

**Developer Command Center** provides engineering organizations, engineering managers, and individual developers with complete 360° observability over their software lifecycle:

- 📊 **Real DORA Metrics Computation Engine:**
  - **Deployment Frequency (DF):** Real-time daily/weekly deployment rate classification (Elite / High / Medium / Low).
  - **Lead Time for Changes (LTFC):** Precise calculation from first commit to production deployment.
  - **Change Failure Rate (CFR):** Percentage of deployments resulting in production incidents or rollbacks.
  - **Mean Time to Recovery (MTTR):** Time elapsed between incident trigger and healthy recovery.
  - *Includes interactive 7-day and 30-day historical trend graphs via Recharts.*

- 🤖 **Automated AI Code Reviews (Google Gemini 1.5 Flash):**
  - Instant unified diff analysis for GitHub Pull Requests.
  - Automated OWASP Top 10 security scanning, vulnerability detection, and algorithmic complexity scoring.
  - Code Quality Rating (0–100) with line-by-line refactoring recommendations.

- 🔐 **Enterprise Multi-Provider Authentication & Security:**
  - **Google OAuth 2.0** with email auto-linking and verified avatar synchronization.
  - **GitHub OAuth 2.0** with **AES-256-GCM** encryption for access tokens stored at rest.
  - **Email + Password Authentication** hardened with bcrypt (cost factor 12) and strict Zod validation.
  - **Dual-Layer Session Architecture:** HttpOnly `SameSite=None` secure cookies paired with Bearer token header fallback.
  - **1-Click Demo Login:** Dedicated sandbox profile for prospective recruiters and portfolio visitors.

- ⚡ **HMAC-SHA256 Timing-Safe Webhook Pipeline:**
  - Cryptographically verifies GitHub webhook deliveries using `crypto.timingSafeEqual`.
  - Replay protection with GUID transaction deduplication stored in PostgreSQL.

- 📡 **Real-Time Telemetry & WebSockets:**
  - Socket.IO live activity feeds broadcasting repository syncs, PR events, and deployment triggers.

- ⌨️ **Keyboard-First Command Palette (`Cmd + K` / `Ctrl + K`):**
  - Instant spotlight navigation across repositories, analytics modules, audit logs, and settings.

---

## 🛠️ Technology Stack

<div align="center">

### Frontend Ecosystem
| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **React 18** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Dynamic UI component architecture & hooks |
| **Vite 6** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) | Next-generation ultra-fast frontend build tooling |
| **TypeScript** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | End-to-end type safety & developer ergonomics |
| **Tailwind CSS** | ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Obsidian dark aesthetic, responsive cyber glassmorphism |
| **Recharts** | ![Recharts](https://img.shields.io/badge/Recharts-22B5BF?style=flat-square&logo=chartdotjs&logoColor=white) | Composable SVG data visualizations for DORA & velocity |
| **Lucide Icons** | ![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=flat-square&logo=feather&logoColor=white) | Clean, pixel-perfect engineering icon system |
| **Socket.IO Client**| ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socketdotio&logoColor=white) | Bi-directional real-time event streaming |
| **Framer Motion** | ![Framer](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white) | Fluid micro-interactions and modal animations |

### Backend & Core Services
| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **Node.js** | ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white) | Server runtime environment |
| **Express.js** | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | High-throughput REST API framework |
| **Prisma ORM** | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white) | Type-safe database queries and automated migrations |
| **Neon PostgreSQL**| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white) | Serverless cloud relational database with pooling |
| **Google Gemini AI**| ![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75C2?style=flat-square&logo=google&logoColor=white) | AI diff analysis, code quality auditing, assistant |
| **Zod** | ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white) | Runtime schema validation & sanitization |
| **Bcrypt & JWT** | ![Auth](https://img.shields.io/badge/JWT_&_Bcrypt-FF6C37?style=flat-square&logo=jsonwebtokens&logoColor=white) | Password hashing (factor 12) & stateless authentication |
| **Crypto AES-256** | ![Security](https://img.shields.io/badge/AES--256--GCM-00C7B7?style=flat-square&logo=shieldsdotio&logoColor=white) | Authenticated encryption for sensitive GitHub tokens |

### Cloud Infrastructure & DevOps
| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **Vercel** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) | Production Edge deployment for Client SPA |
| **Render** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black) | Managed web service container hosting for API Server |
| **Docker** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | Multi-stage container builds & Docker Compose |

</div>

---

## 🏛️ System Architecture

```
                                  +---------------------------------------------------+
                                  |            CLIENT APPLICATION (REACT 18)          |
                                  |  - Obsidian Cyber Dark UI  - Recharts Telemetry   |
                                  |  - Command Palette (Cmd+K) - Real-time Socket.IO  |
                                  +-------------------------+-------------------------+
                                                            |
                                        REST HTTPS Requests | WebSocket Bi-directional
                                                            v
+-------------------------------------------------------------------------------------------------------------------+
|                                            API ENGINE (NODE.JS + EXPRESS)                                         |
|                                                                                                                   |
|  +---------------------------+  +-------------------------------+  +-------------------------------------------+  |
|  |    AUTH & ACCESS (RBAC)   |  |     GITHUB TELEMETRY SYNC     |  |          SECURITY & INGESTION             |  |
|  | - Google OAuth 2.0        |  | - Repositories & Branches     |  | - HMAC-SHA256 Webhook Verification        |  |
|  | - GitHub OAuth 2.0        |  | - Pull Requests & Issues      |  | - AES-256-GCM Token Encryption            |  |
|  | - bcrypt-12 / JWT Tokens  |  | - Commits & Author Telemetry  |  | - GUID Deduplication Replay Protection    |  |
|  +---------------------------+  +-------------------------------+  +-------------------------------------------+  |
|                                                                                                                   |
|  +---------------------------+  +-------------------------------+  +-------------------------------------------+  |
|  |   DORA CALCULATION CORE   |  |    AI PR REVIEW CONTROLLER    |  |          SOCKET.IO BROADCASTER            |  |
|  | - Deployment Frequency    |  | - Code Quality Score (0-100)  |  | - Real-Time Dashboard Events              |  |
|  | - Lead Time for Changes   |  | - OWASP Vulnerability Check   |  | - Repository Freshness Alerts             |  |
|  | - Change Failure Rate     |  | - Complexity & Suggestions    |  | - Live Deployment Statuses                |  |
|  | - Mean Time to Recovery   |  |                               |  |                                           |  |
|  +---------------------------+  +-------------------------------+  +-------------------------------------------+  |
+-----------------------------------------------+-----------------------------------+-------------------------------+
                                                |                                   |
                                                v                                   v
                             +-------------------------------------+   +-----------------------------------------+
                             |     NEON SERVERLESS POSTGRESQL      |   |         GOOGLE GEMINI 1.5 FLASH         |
                             |            (PRISMA ORM)             |   |                                         |
                             | - Users, Accounts, Refresh Tokens   |   | - Unified PR Diff Static Inspection     |
                             | - Repos, Commits, PRs, Reviews      |   | - Context-Aware Interactive Assistant   |
                             | - Deployments, Incidents, Webhooks  |   | - OWASP & Performance Remediation Plans |
                             +-------------------------------------+   +-----------------------------------------+
```

---

## 📁 Repository Structure

```
Developer-Command-Center/
├── client/                               # Frontend Single Page Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/                   # Reusable components (CommandPalette, PrivacyModal, Waves)
│   │   │   ├── dashboard/                # DORA metric widgets, commit velocity, PR bottlenecks
│   │   │   ├── layout/                   # Topbar, Sidebar, PageContainer
│   │   │   └── pr/                       # AI PR review modal & diff viewer
│   │   ├── context/                      # AuthContext (JWT + Session state)
│   │   ├── hooks/                        # useSocket custom WebSockets hook
│   │   ├── pages/                        # 16+ pages (Dashboard, DORA, Commits, PRs, Deployments, AI)
│   │   ├── services/                     # Axios API client with interceptors
│   │   ├── types/                        # TypeScript domain model declarations
│   │   ├── App.tsx                       # React Router configuration
│   │   └── main.tsx                      # App bootstrap
│   ├── index.html                        # App title & metadata
│   ├── package.json                      # Frontend dependencies
│   ├── tailwind.config.js                # Cyber-dark theme styles
│   └── vite.config.ts                    # Vite config with dev reverse proxy
│
├── server/                               # Backend REST API & Real-time Server
│   ├── prisma/
│   │   ├── schema.prisma                 # Relational PostgreSQL database schema
│   │   └── migrations/                   # SQL migration history
│   ├── src/
│   │   ├── config/                       # Environment schema (Zod) & Prisma client instance
│   │   ├── controllers/                  # Route handlers (Auth, DORA, GitHub, AI, Webhook)
│   │   ├── middleware/                   # RBAC, Rate-Limiting, JWT Auth Verification
│   │   ├── routes/                       # Express route declarations
│   │   ├── services/                     # Business logic (GitHub Sync, DORA calculator, Gemini AI)
│   │   ├── utils/                        # AES-256-GCM crypto & JWT helpers
│   │   ├── app.ts                        # Express middleware & CORS setup
│   │   └── server.ts                     # HTTP + Socket.IO server startup
│   ├── .env                              # Server environment variables (SECRET!)
│   └── package.json                      # Backend dependencies
│
├── docker-compose.yml                    # Optional containerized orchestrator
└── package.json                          # Monorepo root scripts
```

---

## 🔑 Environment Variables Setup Guide

All configuration is centralized inside **`server/.env`**. Below is the complete step-by-step guide with exact portal links and instructions on how to obtain and configure every single key.

### Summary Matrix

| Variable | Required? | Default / Example | Purpose |
| :--- | :---: | :--- | :--- |
| `PORT` | Optional | `5000` | Port on which Express API server listens |
| `NODE_ENV` | Yes | `development` (or `production`) | Runtime environment mode |
| `CLIENT_URL` | Yes | `http://localhost:5173` | Allowed frontend origin for CORS & cookies |
| `DATABASE_URL` | **YES** | `postgresql://user:pass@host/neondb?sslmode=require` | PostgreSQL database connection string |
| `JWT_SECRET` | **YES** | Random 32+ character string | Signs user authentication JSON Web Tokens |
| `ENCRYPTION_KEY`| **YES** | 64-hex-character string (32 bytes) | AES-256-GCM cipher key for GitHub access tokens |
| `GITHUB_CLIENT_ID`| Recommended | Client ID string | Enables GitHub OAuth 2.0 login & data sync |
| `GITHUB_CLIENT_SECRET`| Recommended | Client Secret string | GitHub OAuth secret |
| `GITHUB_CALLBACK_URL`| Recommended | `http://localhost:5000/api/auth/github/callback` | OAuth redirect endpoint |
| `GOOGLE_CLIENT_ID`| Optional | `xxxx.apps.googleusercontent.com` | Google OAuth 2.0 Client ID |
| `GOOGLE_CLIENT_SECRET`| Optional | Secret string | Google OAuth 2.0 Secret |
| `GOOGLE_CALLBACK_URL`| Optional | `http://localhost:5000/api/auth/google/callback` | Google OAuth redirect URI |
| `GEMINI_API_KEY`| Recommended | `AIzaSy...` | Powers Gemini 1.5 Flash AI code reviews |
| `GITHUB_WEBHOOK_SECRET`| Optional | Random secret string | Verifies GitHub webhook HMAC signatures |
| `ALLOWED_GITHUB_USERS` | Optional | `your-github-username` (or leave empty) | Whitelist specific GitHub logins (leave blank for all) |
| `DEMO_LOGIN_ENABLED` | Optional | `true` | Enables 1-Click Guest demo login |

---

### Step-by-Step Instructions to Obtain Every Key

---

#### 1. `DATABASE_URL` (Neon Serverless PostgreSQL)
* **What is it?** A cloud-hosted PostgreSQL database connection string required by Prisma ORM.
* **Website Link:** [https://neon.tech](https://neon.tech)
* **How to get it:**
  1. Go to [https://neon.tech](https://neon.tech) and sign up (free tier available with no credit card required).
  2. Click **"Create Project"**.
  3. Give your project a name (e.g. `developer-command-center`) and select your closest cloud region.
  4. On the project dashboard, locate the **Connection Details** card.
  5. Select **Prisma** or **PostgreSQL** from the dropdown.
  6. Copy the connection string. It will look like:
     ```env
     DATABASE_URL="postgresql://neondb_owner:npg_xxxxxx@ep-cool-cloud-xxxxxx.us-east-2.aws.neon.tech/neondb?sslmode=require"
     ```
  7. Paste this into your `server/.env` file.

---

#### 2. `JWT_SECRET`
* **What is it?** A cryptographic secret string used to sign and verify user session tokens.
* **How to generate it:**
  Run this quick one-liner command in your terminal (PowerShell or Bash) to generate a secure 64-character random string:
  
  **PowerShell (Windows):**
  ```powershell
  -join ((65..90) + (97..122) + (48..57) | Get-Random -Count 64 | ForEach-Object {[char]$_})
  ```
  **Or with Node.js (any OS):**
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
  Example output:
  ```env
  JWT_SECRET="9f8a7c2b3d4e5f6a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a"
  ```

---

#### 3. `ENCRYPTION_KEY` (32-byte Hex)
* **What is it?** An exact 32-byte (64 hex characters) key required by the AES-256-GCM encryption algorithm to securely store personal GitHub access tokens in PostgreSQL.
* **How to generate it:**
  Run this in your terminal:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
  Copy the 64-character hex string output and set:
  ```env
  ENCRYPTION_KEY="c3f190a6e4d29381c0ab5827e892ef61203498ab5671239845cdfa1234567890"
  ```

---

#### 4. `GITHUB_CLIENT_ID` & `GITHUB_CLIENT_SECRET` (GitHub OAuth)
* **What is it?** Connects the platform to GitHub to read repositories, pull requests, commits, and perform AI reviews.
* **Website Link:** [https://github.com/settings/developers](https://github.com/settings/developers)
* **How to get it:**
  1. Open [GitHub Developer Settings -> OAuth Apps](https://github.com/settings/developers).
  2. Click **"New OAuth App"** (or **"Register a new application"**).
  3. Fill in the fields:
     - **Application name:** `Developer Command Center`
     - **Homepage URL:** `http://localhost:5173` (or your production frontend URL)
     - **Application description:** `Engineering telemetry and code review platform`
     - **Authorization callback URL:**
       - For Local Dev: `http://localhost:5000/api/auth/github/callback`
       - For Production: `https://your-backend-api.onrender.com/api/auth/github/callback`
  4. Click **"Register application"**.
  5. Copy your **Client ID**.
  6. Under **Client secrets**, click **"Generate a new client secret"** and copy it immediately.
  7. Add them to `server/.env`:
     ```env
     GITHUB_CLIENT_ID="Iv1.xxxxxxxxxxxx"
     GITHUB_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
     GITHUB_CALLBACK_URL="http://localhost:5000/api/auth/github/callback"
     ```

---

#### 5. `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` (Google OAuth 2.0)
* **What is it?** Allows 1-click Google Sign-In for team members.
* **Website Link:** [https://console.cloud.google.com/apis/credentials](https://console.cloud.google.com/apis/credentials)
* **How to get it:**
  1. Open [Google Cloud Console](https://console.cloud.google.com/).
  2. Create a new project (e.g. `Developer Command Center`).
  3. Navigate to **APIs & Services** > **OAuth consent screen**:
     - User Type: **External** -> Click **Create**.
     - Enter App Name: `Developer Command Center`, User Support Email, and Developer Contact Email.
     - Click **Save and Continue** through the steps.
  4. Navigate to **APIs & Services** > **Credentials**:
     - Click **"+ CREATE CREDENTIALS"** > **OAuth client ID**.
     - Application type: **Web application**.
     - Name: `DCC Web Client`.
     - **Authorized JavaScript origins:**
       - `http://localhost:5173`
       - *(Production)* `https://your-frontend.vercel.app`
     - **Authorized redirect URIs:**
       - `http://localhost:5000/api/auth/google/callback`
       - *(Production)* `https://your-backend-api.onrender.com/api/auth/google/callback`
     - Click **Create**.
  5. Copy the **Client ID** and **Client Secret**.
  6. Add them to `server/.env`:
     ```env
     GOOGLE_CLIENT_ID="xxxxxxx.apps.googleusercontent.com"
     GOOGLE_CLIENT_SECRET="GOCSPX-xxxxxxxxxxxxxxxxxxxxxxxx"
     GOOGLE_CALLBACK_URL="http://localhost:5000/api/auth/google/callback"
     ```

---

#### 6. `GEMINI_API_KEY` (Google AI Studio)
* **What is it?** Powers the automated PR code review engine and interactive engineering chat assistant via Google Gemini 1.5 Flash.
* **Website Link:** [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
* **How to get it:**
  1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey).
  2. Sign in with your Google Account.
  3. Click **"Get API key"** (or **"Create API key in new project"**).
  4. Copy the API key string (starts with `AIzaSy...`).
  5. Add to `server/.env`:
     ```env
     GEMINI_API_KEY="AIzaSyYourGeneratedGeminiKeyHere"
     ```

---

#### 7. `GITHUB_WEBHOOK_SECRET`
* **What is it?** Verifies HMAC-SHA256 signatures for live GitHub webhook push/pull_request events.
* **How to set it:**
  1. Generate any random string (e.g. `my_secure_webhook_secret_12345`).
  2. Add to `server/.env`:
     ```env
     GITHUB_WEBHOOK_SECRET="my_secure_webhook_secret_12345"
     ```
  3. In your GitHub repository -> **Settings** -> **Webhooks** -> **Add webhook**:
     - Payload URL: `https://your-backend-api.onrender.com/api/webhooks/github`
     - Content type: `application/json`
     - Secret: `my_secure_webhook_secret_12345`
     - Events: Select `Pull requests`, `Pushes`, `Issues`.

---

#### 8. `ALLOWED_GITHUB_USERS` (Access Control)
* **What is it?** Whitelist specific GitHub logins for security.
* **Important:** If this variable is set to a username, **ONLY** that username will be permitted to log in via GitHub OAuth!
* **How to configure:**
  - **For personal use:** Set it to your own GitHub username:
    ```env
    ALLOWED_GITHUB_USERS="your-github-username"
    ```
  - **For team/public access:** Remove this line or leave it empty:
    ```env
    ALLOWED_GITHUB_USERS=""
    ```

---

#### 9. Frontend Environment Variable (`client/.env`)
* For local development, **no `.env` file is required in `client/`** because Vite proxies `/api` and `/socket.io` to `http://localhost:5000` automatically.
* When deploying to production (e.g. Vercel), add this in your Vercel Project Settings:
  ```env
  VITE_API_URL=https://your-backend-api.onrender.com
  ```

---

### Complete Example `server/.env` File

```env
# -----------------------------------------------------------------------------
# DEVELOPER COMMAND CENTER — SERVER ENVIRONMENT CONFIGURATION
# -----------------------------------------------------------------------------
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Database (Neon Serverless PostgreSQL)
DATABASE_URL="postgresql://username:password@ep-host.region.aws.neon.tech/neondb?sslmode=require"

# Cryptography & Sessions
JWT_SECRET="replace-with-a-64-character-random-jwt-secret-key"
ENCRYPTION_KEY="c3f190a6e4d29381c0ab5827e892ef61203498ab5671239845cdfa1234567890"

# GitHub OAuth 2.0 Integration
GITHUB_CLIENT_ID="your_github_client_id_here"
GITHUB_CLIENT_SECRET="your_github_client_secret_here"
GITHUB_CALLBACK_URL="http://localhost:5000/api/auth/github/callback"

# Google OAuth 2.0 Integration
GOOGLE_CLIENT_ID="your_google_client_id_here.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your_google_client_secret_here"
GOOGLE_CALLBACK_URL="http://localhost:5000/api/auth/google/callback"

# Google Gemini AI Engine
GEMINI_API_KEY="AIzaSyYourGeneratedGeminiKeyHere"

# Security & Webhooks
GITHUB_WEBHOOK_SECRET="dev_cmd_center_webhook_secret_998877"
ALLOWED_GITHUB_USERS=""
DEMO_LOGIN_ENABLED="true"
```

---

## 💻 Step-by-Step Installation & Local Setup

### 1. Prerequisites Check
Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher (v20+ recommended). Check with `node -v`.
- **npm**: v9.0.0 or higher. Check with `npm -v`.
- **Git**: Installed. Check with `git --version`.

---

### 2. Clone the Repository
```bash
git clone https://github.com/<YOUR_USERNAME>/Developer-Command-Center.git
cd Developer-Command-Center
```

---

### 3. Setup Backend Server

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Copy or create your .env configuration
cp .env.example .env   # Or create server/.env and fill in your keys

# Generate Prisma Client & push schema to your Neon PostgreSQL database
npx prisma generate
npx prisma db push

# Start backend in development mode
npm run dev
```
> The API server will be live at `http://localhost:5000` with status health-check available at `http://localhost:5000/api/health`.

---

### 4. Setup Frontend Client (In a New Terminal)

```bash
# Open a second terminal and navigate to client directory
cd client

# Install frontend dependencies
npm install

# Start Vite development server
npm run dev
```
> The dashboard will be accessible at **`http://localhost:5173`** with hot module replacement (HMR) enabled!

---

## 🎨 Clone & Personalization Checklist

When cloning your friend's repository, follow this checklist to replace all personal information, social handles, links, and access controls with your own:

| # | File Path | Line(s) | What to Change | Why |
| :-: | :--- | :---: | :--- | :--- |
| **1** | [`server/.env`](file:///D:/Developer-Command-Center--main/server/.env) | 25 | Change or clear `ALLOWED_GITHUB_USERS` | Prevents being locked out of GitHub OAuth login |
| **2** | [`README.md`](file:///D:/Developer-Command-Center--main/README.md) | Header & Footer | Replace Name, Email, LinkedIn, GitHub, and Portfolio badges | Showcase your own identity on GitHub |
| **3** | [`client/src/components/common/PrivacyModal.tsx`](file:///D:/Developer-Command-Center--main/client/src/components/common/PrivacyModal.tsx) | 157 | Update GitHub repository link (`Audit Source Code on GitHub`) | Points users to your repository |
| **4** | [`client/src/pages/Login.tsx`](file:///D:/Developer-Command-Center--main/client/src/pages/Login.tsx) | 262 | Change input placeholder (e.g. `placeholder="e.g. Your Name"`) | Cosmetic touch on registration input |
| **5** | [`client/src/pages/Teams.tsx`](file:///D:/Developer-Command-Center--main/client/src/pages/Teams.tsx) | 29, 32 | Customize mock team member name and role | Personalize team leadership showcase |
| **6** | [`client/src/pages/Notifications.tsx`](file:///D:/Developer-Command-Center--main/client/src/pages/Notifications.tsx) | 32 | Customize mock deployment notification name | Personalize mock activity notifications |
| **7** | [`client/src/context/AuthContext.tsx`](file:///D:/Developer-Command-Center--main/client/src/context/AuthContext.tsx) | 98 | Default username in `demoLogin` | Sets demo user handle |
| **8** | [`client/index.html`](file:///D:/Developer-Command-Center--main/client/index.html) | 7-8 | Page `<title>` and `<meta description>` | Browser tab title and SEO preview |
| **9** | [`server/src/controllers/auth.controller.ts`](file:///D:/Developer-Command-Center--main/server/src/controllers/auth.controller.ts) | 43, 54 | Fallback Render URL strings | Fallback production callback URLs |

---

## 📡 API Endpoints Reference

### 🔐 Authentication (`/api/auth`)
- `POST /api/auth/register` — Create account with bcrypt-12 password hashing.
- `POST /api/auth/login` — Sign in with email and password.
- `POST /api/auth/dev-login` — 1-Click instant demo guest access.
- `GET /api/auth/github` — Initiates GitHub OAuth authorization flow.
- `GET /api/auth/github/callback` — Handles OAuth code exchange and token AES encryption.
- `GET /api/auth/google` — Initiates Google OAuth consent flow.
- `GET /api/auth/google/callback` — Google OAuth profile verification and token issuance.
- `GET /api/auth/me` — Retrieve active authenticated user profile.
- `POST /api/auth/logout` — Invalidate session and clear auth cookies.

### 📊 DORA & Telemetry (`/api/dora`, `/api/github`)
- `GET /api/dora/metrics` — Computes 4 DORA metrics with 7-day and 30-day historical trend models.
- `GET /api/github/repositories` — List synchronized GitHub repositories with health badges.
- `GET /api/github/pull-requests` — Live PR telemetry with authors, status, and SLA ages.
- `GET /api/github/issues` — Live issue stream with resolution time analytics.
- `GET /api/github/commits` — Commit stream and velocity timeline.
- `POST /api/github/sync/all` — Trigger immediate synchronization with GitHub REST API.

### 🤖 AI Engineering Intelligence (`/api/ai`)
- `POST /api/ai/ask` — Interactive telemetry questions answered by Gemini 1.5 Flash.
- `POST /api/ai/review-pr/:prId` — Conducts automated PR diff review and security scan.
- `GET /api/ai/reviews/:prId` — Fetches historical AI code review records.

### 🚀 CI/CD & Deployments (`/api/deployments`)
- `GET /api/deployments` — Deployment release records and pass/fail metrics.
- `POST /api/deployments/trigger` — Trigger deployment simulations or release workflows.

---

## 🚀 Production Deployment Guide

### Deploying the Backend on Render
1. Push your repository to your GitHub account.
2. Sign in to [Render](https://render.com).
3. Click **"New +"** > **"Web Service"**.
4. Connect your GitHub repository.
5. Configure the service:
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npx prisma generate && npm run build`
   - **Start Command:** `npm run start`
6. Under **Environment Variables**, paste all the variables from your `server/.env`:
   - `NODE_ENV=production`
   - `CLIENT_URL=https://your-app.vercel.app`
   - `DATABASE_URL=postgresql://...`
   - `JWT_SECRET=...`
   - `ENCRYPTION_KEY=...`
   - `GITHUB_CLIENT_ID=...`
   - `GITHUB_CLIENT_SECRET=...`
   - `GITHUB_CALLBACK_URL=https://your-backend.onrender.com/api/auth/github/callback`
   - `GEMINI_API_KEY=...`
7. Click **"Deploy Web Service"**.

---

### Deploying the Frontend on Vercel
1. Sign in to [Vercel](https://vercel.com).
2. Click **"Add New..."** > **"Project"**.
3. Import your GitHub repository.
4. Set **Root Directory** to `client`.
5. Under **Environment Variables**, add:
   - `VITE_API_URL` = `https://your-backend.onrender.com` (Your Render backend URL without trailing slash)
6. Click **"Deploy"**.

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute for personal or commercial projects.

<div align="center">

## 👨‍💻 Author & Connect

**K Tirumala Achari**  
Full Stack Developer | Aspiring Software Engineer

<a href="mailto:ktirumalachari@gmail.com">
  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"/>
</a>
<a href="https://www.linkedin.com/in/k-tirumala-achari-921106307/">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
</a>
<a href="https://github.com/ktirumalaachari">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
</a>
<a href="https://www.ktirumalaachari.me">
  <img src="https://img.shields.io/badge/Portfolio-FF6B35?style=for-the-badge&logo=firefox&logoColor=white" alt="Portfolio"/>
</a>
<br/><br/>

> _"Passionate about building impactful, user-centric solutions through technology,_
> _committed to continuous learning and innovation."_

<div align="center">
**⭐ If you found this project helpful or inspiring, please give it a star! ⭐**

<br/>
Made with ❤️ by **K Tirumala Achari**

[![GitHub](https://img.shields.io/badge/GitHub-ktirumalaachari-blue?style=flat&logo=github)](https://github.com/ktirumalaachari)

</div>