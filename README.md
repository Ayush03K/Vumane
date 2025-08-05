# 📚 Vumane - A Literature-Themed Blogging Platform

**Vumane** is a minimalist, full-stack content publishing and blogging platform inspired by the literary works of **Franz Kafka** and **Fyodor Dostoevsky**. It empowers users to share thoughts, blogs, and creative pieces in a dark-themed, elegant environment.

Hosted on **Cloudflare Workers** and **Vercel**, Vumane is optimized for performance and edge-first delivery.

---

## 🚀 Features

- 📝 Create, read, and browse blogs
- 🔐 JWT-based authentication system
- 👤 Signup/Login with validation using Zod
- 📚 Kafka-Dostoevsky inspired UI theme
- 📦 Backend hosted on Cloudflare Workers with Hono
- ⚡ Prisma ORM with Accelerate for fast queries
- 🌐 CORS enabled for secure frontend-backend communication

---

## 🛠️ Tech Stack

| Area       | Tech Used                             |
|------------|----------------------------------------|
| Frontend   | React, TypeScript, Vite, Tailwind CSS |
| Backend    | Hono (Cloudflare Workers), Node.js    |
| Database   | PostgreSQL with Prisma ORM            |
| Auth       | JWT, Role-based Access                |
| Validation | Zod                                   |
| Deployment | Vercel (Frontend), Cloudflare Workers (Backend) |

---

## Screenshots

<p align="center">
  <img src="https://github.com/user-attachments/assets/383b8f91-df15-4284-aeaf-a0ccea11baf0" width="45%" />
  <img src="https://github.com/user-attachments/assets/a511fa95-ccea-4af6-8cbe-450361ab432f" width="45%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/c66e72ac-8525-4a95-a45e-4022c1889e21" width="45%" />
  <img src="https://github.com/user-attachments/assets/7b92cc58-e69e-4dba-9213-be75a6a8e077" width="45%" />
</p>
<p align="center">
  <img src="https://github.com/user-attachments/assets/c8bab996-d8de-4718-84f9-1a8082fcb825" width="45%" />
</p>


## 🖥️ Live Demo

Frontend: [https://vumane.vercel.app](https://vumane.vercel.app)  
Backend: [Cloudflare Worker URL](https://vumane-backend.ayushkhandelwal355.workers.dev)

---

## ⚙️ Getting Started

### Clone the Repository
```bash
git clone https://github.com/Ayush03K/Vumane.git
cd Vumane
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npx wrangler dev
```
