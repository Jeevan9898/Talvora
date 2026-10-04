# 💼 Talvora — Job Portal SaaS

**A full-stack hiring platform — employers post jobs, candidates apply, all managed through role-based dashboards**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000?style=flat&logo=vercel&logoColor=white)](https://talvora-frontend.vercel.app)
[![API](https://img.shields.io/badge/API-Render-46E3B7?style=flat&logo=render&logoColor=white)](https://talvora.onrender.com)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)](https://www.mongodb.com)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat&logo=cloudinary&logoColor=white)](https://cloudinary.com)
[![Multer](https://img.shields.io/badge/Multer-FF6600?style=flat)](https://github.com/expressjs/multer)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 🌐 Live Demo

| Service  | Platform | URL |
| -------- | -------- | --- |
| **Frontend** | Vercel | [talvora-frontend.vercel.app](https://talvora-frontend.vercel.app) |
| **Backend API** | Render | [talvora.onrender.com](https://talvora.onrender.com) |

> ⏳ The backend runs on Render. If the service has been idle, the first request may take a few seconds while it wakes up.

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Architecture](#-architecture)
- [API Endpoints](#-api-endpoints)
- [Security](#-security)
- [File Uploads](#-file-uploads)
- [Deployment](#-deployment)
- [Getting Started](#-getting-started)
- [Concepts Covered](#-concepts-covered)
- [Future Improvements](#-future-improvements)
- [Author](#-author)

---

## 📖 Overview

**Talvora** is a full-stack hiring platform that allows **employers** to manage companies, post jobs, and review applications — while enabling **candidates** to search for jobs, upload resumes, and apply seamlessly.

Built with the **MERN Stack** and **Cloudinary** for cloud-based file management. Features role-based authorization, password reset flow, search and filtering, and separate employer and candidate dashboards. The backend is deployed on **Render** and the frontend on **Vercel**.

---

## ✨ Features

### 🔐 Authentication

| Feature                    | Description                                       |
| -------------------------- | ------------------------------------------------- |
| 📝 Registration & Login     | Secure account creation with hashed passwords     |
| 🎫 JWT Auth                 | Stateless token-based session management          |
| 🛡️ Protected Routes        | Middleware guards for authenticated access        |
| 👥 Role-Based Authorization | Separate permissions for Candidates and Employers |
| 🔑 Forgot Password          | Initiate password reset flow via email            |
| 🔄 Reset Password           | Token-validated password update                   |

---

### 👤 Candidate Features

| Feature                  | Description                                      |
| ------------------------ | ------------------------------------------------ |
| 👁️ View & Update Profile | Manage personal info and profile picture         |
| 📄 Upload Resume          | Store resume on Cloudinary                       |
| 🔍 Search & Filter Jobs   | Find relevant jobs by keyword, type, or location |
| 📃 Pagination             | Paginated job listings for performance           |
| 📨 Apply for Jobs         | Submit applications with one click               |
| 📋 View Applications      | Track all submitted applications                 |
| ↩️ Withdraw Application  | Withdraw when application allows it              |
| 📊 Candidate Dashboard    | Summary of all application statuses              |

---

### 🏢 Employer Features

| Feature                               | Description                                |
| ------------------------------------- | ------------------------------------------ |
| 🏗️ Create / Update / Delete Company   | Manage company profiles with logo upload   |
| 📢 Post / Update / Close / Delete Jobs | Full job lifecycle management              |
| 📬 View Applications                   | Review all applications per job            |
| 🔄 Update Application Status           | Accept, reject, or move candidates forward |
| 📊 Employer Dashboard                  | Stats on companies, jobs, and applications |

---

### 📊 Dashboard Metrics

| Employer Dashboard     | Candidate Dashboard        |
| ---------------------- | -------------------------- |
| Total Companies        | Total Applications         |
| Total Jobs             | Application Status Summary |
| Open / Closed Jobs     | —                          |
| Total Applications     | —                          |
| Application Statistics | —                          |

---

## 🛠 Tech Stack

| Layer              | Technologies        |
| ------------------ | ------------------- |
| **Backend**        | Node.js, Express.js |
| **Database**       | MongoDB, Mongoose   |
| **Authentication** | JWT, bcryptjs       |
| **File Uploads**   | Multer, Cloudinary  |
| **Environment**    | dotenv              |
| **API Testing**    | Postman             |
| **Frontend Hosting** | Vercel            |
| **Backend Hosting**  | Render            |

---

## 📁 Project Structure

```
Talvora/
│
├── backend/                    # Express API, routes, controllers, models, and config
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/                   # Browser client for candidates and employers
│   ├── index.html
│   ├── styles.css
│   └── app.js
│
├── render.yaml                 # Render deployment config (backend)
├── package.json
├── LICENSE
└── README.md
```

---

## 🏗 Architecture

```mermaid
flowchart TD
    A[👤 Candidate] --> V[▲ Frontend on Vercel]
    C[🏢 Employer] --> V
    V --> B[🌐 REST API Client]
    B --> D[🚀 Express.js Server on Render]
    D --> E{Auth Middleware}
    E -- JWT Valid --> F{Role Check}
    E -- Invalid --> G[❌ 401 Unauthorized]
    F -- Candidate --> H[📨 Application Routes]
    F -- Employer --> I[📢 Job & Company Routes]
    H --> J[📦 Mongoose ODM]
    I --> J
    J --> K[🗄️ MongoDB]
    H --> L[☁️ Cloudinary]
    I --> L
```

---

## 📡 API Endpoints

**Base URL (production):** `https://talvora.onrender.com`

### Authentication

| Method | Endpoint                          | Access | Description               |
| ------ | --------------------------------- | ------ | ------------------------- |
| `POST` | `/api/auth/register`              | Public | Register a new user       |
| `POST` | `/api/auth/login`                 | Public | Login and receive JWT     |
| `POST` | `/api/auth/forgot-password`       | Public | Initiate password reset   |
| `PUT`  | `/api/auth/reset-password/:token` | Public | Reset password with token |

### Users

| Method | Endpoint                     | Access    | Description              |
| ------ | ---------------------------- | --------- | ------------------------ |
| `GET`  | `/api/users/profile`         | Protected | Get current user profile |
| `PUT`  | `/api/users/profile`         | Protected | Update profile details   |
| `PUT`  | `/api/users/profile/picture` | Protected | Upload profile picture   |

### Companies

| Method   | Endpoint             | Access    | Description            |
| -------- | -------------------- | --------- | ---------------------- |
| `POST`   | `/api/companies`     | Employer  | Create a new company   |
| `GET`    | `/api/companies`     | Protected | Get all companies      |
| `PUT`    | `/api/companies/:id` | Employer  | Update company details |
| `DELETE` | `/api/companies/:id` | Employer  | Delete a company       |

### Jobs

| Method   | Endpoint              | Access   | Description                     |
| -------- | --------------------- | -------- | ------------------------------- |
| `POST`   | `/api/jobs`           | Employer | Post a new job                  |
| `PUT`    | `/api/jobs/:id`       | Employer | Update job details              |
| `PUT`    | `/api/jobs/:id/close` | Employer | Close a job listing             |
| `DELETE` | `/api/jobs/:id`       | Employer | Delete a job                    |
| `GET`    | `/api/jobs`           | Public   | Search / filter / paginate jobs |

### Applications

| Method   | Endpoint                       | Access    | Description               |
| -------- | ------------------------------ | --------- | ------------------------- |
| `POST`   | `/api/applications/:jobId`     | Candidate | Apply for a job           |
| `GET`    | `/api/applications/my`         | Candidate | View own applications     |
| `DELETE` | `/api/applications/:id`        | Candidate | Withdraw an application   |
| `GET`    | `/api/applications/job/:jobId` | Employer  | View applications per job |
| `PUT`    | `/api/applications/:id/status` | Employer  | Update application status |

### Dashboard

| Method | Endpoint                   | Access    | Description                   |
| ------ | -------------------------- | --------- | ----------------------------- |
| `GET`  | `/api/dashboard/employer`  | Employer  | Employer stats and metrics    |
| `GET`  | `/api/dashboard/candidate` | Candidate | Candidate application summary |

---

## 🔒 Security

- JWT Authentication with expiry
- Password hashing via bcryptjs
- Protected routes via middleware
- Role-based access control (Candidate / Employer)
- Ownership validation on company and job mutations
- Sensitive keys managed via environment variables

---

## ☁️ File Uploads

All file assets are stored and managed via **Cloudinary**:

| Asset             | Upload Trigger                     |
| ----------------- | ---------------------------------- |
| 👤 Profile Picture | Candidate profile update           |
| 📄 Resume (PDF)    | Candidate resume upload            |
| 🏢 Company Logo    | Employer company creation / update |

Files are processed by **Multer** in-memory before being streamed to Cloudinary via the `uploadFactory` middleware.

---

## 🚢 Deployment

Talvora is deployed as two independent services that talk over HTTPS:

```mermaid
flowchart LR
    GH[(GitHub repo<br/>Jeevan9898/Talvora)] -- auto-deploy on push --> R[Render<br/>talvora-api]
    GH -- auto-deploy on push --> V[Vercel<br/>talvora-frontend]
    U[👤 User browser] --> V
    V -- HTTPS REST calls --> R
    R --> M[(MongoDB Atlas)]
    R --> C[(Cloudinary)]
```

| Part         | Platform      | Source folder | URL |
| ------------ | ------------- | ------------- | --- |
| **Frontend** | Vercel        | `frontend/`   | [talvora-frontend.vercel.app](https://talvora-frontend.vercel.app) |
| **Backend**  | Render        | `backend/`    | [talvora.onrender.com](https://talvora.onrender.com) |
| **Database** | MongoDB Atlas | —             | via `MONGO_URI` |
| **Files**    | Cloudinary    | —             | via `CLOUDINARY_*` keys |

### Deployment path

**1. Push to GitHub.** Both platforms are connected to this repo, so a push to `main` triggers a new deploy on each.

**2. Set up the database and file storage.**
- Create a MongoDB Atlas cluster and copy its connection string.
- In Atlas → Network Access, allow connections from Render (Render's outbound IPs change, so `0.0.0.0/0` is the usual choice for a free-tier setup).
- Create a Cloudinary account and note the cloud name, API key and API secret.

**3. Deploy the backend on Render.** The service is defined in [`render.yaml`](render.yaml):

| Setting | Value |
| ------- | ----- |
| Service type | Web Service (Node) |
| Root directory | `backend` |
| Build command | `npm ci` |
| Start command | `npm start` |

Add these environment variables in the Render dashboard (they are declared in `render.yaml` with `sync: false`, so values are entered manually and never committed):

```env
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Render sets `PORT` automatically. After the first deploy, open `https://talvora.onrender.com` to confirm the API is up.

**4. Point the frontend at the backend.** In the frontend code, set the API base URL to `https://talvora.onrender.com` (instead of `http://localhost:5005`).

**5. Deploy the frontend on Vercel.**
- Import the GitHub repo in Vercel.
- Set **Root Directory** to `frontend`.
- Framework preset: **Other** (plain static site). Leave the build command empty, output directory `.`.
- Deploy. Vercel serves the site at `talvora-frontend.vercel.app`.

**6. Verify end to end.** Open the Vercel URL, register a user, log in, and upload a profile picture or resume. This exercises the frontend → Render → MongoDB → Cloudinary chain. If requests fail in the browser console with a CORS error, allow the Vercel origin in the backend's CORS configuration and redeploy.

### Updating a deployment

| Change | What to do |
| ------ | ---------- |
| Code change (backend or frontend) | Push to `main`; Render and Vercel redeploy automatically |
| New or changed secret | Update it in the Render dashboard and redeploy the service |
| Backend URL changed | Update the API base URL in the frontend, then push |

> ⏳ On Render's free tier the backend sleeps after a period of inactivity, so the first request after a while can take several seconds to respond.

---

## 🚀 Getting Started

Run locally, or use the [live demo](https://talvora-frontend.vercel.app).

### Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas)
- Cloudinary account

### Installation

```bash
# Clone the repository
git clone https://github.com/Jeevan9898/Talvora.git
cd Talvora

# Install backend dependencies
cd backend
npm install
```

### Environment Variables

Create a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5005
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Run the Server

```bash
npm run dev
```

Open `frontend/index.html` in a browser after the API is running (for local use, point the frontend's API base URL to `http://localhost:5005`).

---

## 🎓 Concepts Covered

- REST API Development with MVC Architecture
- JWT Authentication & Role-Based Authorization
- MongoDB Aggregation & Mongoose `populate()`
- Search, Filtering & Pagination
- Cloudinary Integration & Multer File Uploads
- Password Reset Flow with token validation
- Ownership Validation Middleware
- Environment variable management
- Structured error handling
- Deploying a split frontend (Vercel) / backend (Render) stack

---

## 🔮 Future Improvements

- [ ] React Frontend
- [ ] Charts & Analytics
- [ ] Notifications
- [ ] Email Verification
- [ ] Redis Caching
- [ ] Docker Support
- [ ] Swagger API Documentation
- [ ] Unit Testing
- [ ] CI/CD Pipeline

---

## 👤 Author

**Jeevan Yadav**

[![Portfolio](https://img.shields.io/badge/Portfolio-000?style=flat&logo=vercel&logoColor=white)](https://jeevan-yadav.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Jeevan9898-181717?style=flat&logo=github)](https://github.com/Jeevan9898)
