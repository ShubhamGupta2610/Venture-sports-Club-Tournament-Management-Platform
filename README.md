# 🚀 Venture – AI-Powered Esports Club & Tournament Management Platform

<p align="center">
  <b>One Platform. Complete Tournament Lifecycle.</b>
</p>

<p align="center">
  AI-Powered Tournament Management | Real-Time Match Tracking | Club Management | Smart Analytics
</p>

---

## 📌 Problem Statement

Esports clubs and tournament organizers often rely on multiple disconnected tools for:

- Team Registration
- Tournament Scheduling
- Match Management
- Communication
- Live Score Tracking
- Result Publishing

This fragmented workflow creates scheduling conflicts, communication gaps, inefficient management, and poor participant experience.

There is a need for a centralized platform that streamlines the complete esports tournament lifecycle while reducing manual effort and improving operational efficiency.

---

## 💡 Solution Overview

**Venture** is a full-stack AI-powered esports club and tournament management platform that enables organizers, clubs, and players to manage the entire tournament ecosystem from a single dashboard.

The platform provides:

✅ Tournament Management

✅ Team & Club Management

✅ Real-Time Match Tracking

✅ Live Communication

✅ Automated Scheduling

✅ AI Match Prediction

✅ AI Highlight Generation

✅ Analytics & Insights

By combining automation, real-time collaboration, and artificial intelligence, Venture transforms how esports tournaments are organized and managed.

---

## ✨ Key Features

### 🏆 Tournament Management

- Create and manage tournaments
- Team registration system
- Match scheduling
- Tournament brackets
- Winner management

### 👥 Club Management

- Club registration
- Club dashboards
- Team management
- Member coordination

### ⚡ Real-Time Features

- Live match updates
- Real-time notifications
- Club chat system
- Socket.IO integration

### 🤖 AI Match Prediction Engine

Provides winning probability predictions before every match.

Example:

| Team | Winning Probability |
|--------|--------|
| Team Alpha | 68% |
| Team Omega | 32% |

Features:

- Historical performance analysis
- Head-to-head comparison
- Confidence scoring
- AI-generated match commentary

### 🎯 AI Highlight Generator

Automatically generates:

- Match summaries
- MVP analysis
- Key moments
- Social media captions
- Tournament reports

Example:

> Team Alpha defeated Team Omega 2-1. MVP Rahul delivered an exceptional performance with 18 kills and only 5 deaths.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|------------|
| Frontend | React.js, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| Authentication | JWT |
| Real-Time Communication | Socket.IO |
| AI Services | Google Gemini API |
| Email Services | Resend API |
| Deployment | Vercel + Render |

---

## 🔌 APIs Used

### Google Gemini API

Purpose:

- AI Match Predictions
- AI Match Summaries
- AI Tournament Insights

### Resend API

Purpose:

- OTP Verification
- Email Notifications
- Password Recovery

### Socket.IO

Purpose:

- Real-Time Match Updates
- Live Notifications
- Club Communication

---

## 🏗️ System Architecture

```text
Frontend (React + Vite)
        │
        ▼
Backend (Node.js + Express)
        │
        ▼
MongoDB Atlas
        │
        ▼
Gemini AI Services
```

---

## ⚙️ Setup Instructions

### Clone Repository

```bash
git clone https://github.com/your-repository.git
cd Venture
```

### Backend Setup

```bash
cd Backend
npm install
```

Create `.env`

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
ACCESS_SECRET=your_access_secret
REFRESH_SECRET=your_refresh_secret
RESEND_API_KEY=your_resend_api_key
```

Run Backend

```bash
npm run dev
```

### Frontend Setup

```bash
cd Frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5005
```

Run Frontend

```bash
npm run dev
```

---

## 🎮 Demo Instructions

### Organizer Workflow

1. Register/Login
2. Create Tournament
3. Register Teams
4. Generate Schedule
5. Manage Live Matches
6. View AI Predictions
7. Generate AI Highlights

### Club Workflow

1. Register Club
2. Create Team
3. Join Tournament
4. Track Live Matches
5. Participate in Club Chat

---

## 📸 Screenshots

### Home Page

<img width="1884" height="918" alt="image" src="https://github.com/user-attachments/assets/cd8f88e3-86c4-4c1c-8daa-42ad5f169b4b" />


### Tournament Dashboard

<img width="1224" height="828" alt="image" src="https://github.com/user-attachments/assets/6d845f12-9ab3-4c3e-ae60-d3946a5cb5d6" />


### Live Match View

<img width="969" height="786" alt="image" src="https://github.com/user-attachments/assets/cc4b4d19-a83d-4738-b69a-554fab2a9237" />


### AI Match Prediction

<img width="1599" height="761" alt="image" src="https://github.com/user-attachments/assets/f5a70967-abd4-4970-8b3e-372daecd29a5" />


### AI Highlight Generator

<img width="1142" height="785" alt="image" src="https://github.com/user-attachments/assets/e4af90e0-615c-4aa0-9454-82ff59b6674a" />


---

## 🚀 Future Scope

- AI Smart Scheduling
- Computer Vision Score Verification
- Sponsor Marketplace
- Mobile Application
- Advanced Tournament Analytics

---

## 👨‍💻 Team

Team Winners: 
Shubham Gupta
Sayansh Pal
Mohammad Kaif Ali
Pratyush Patel

Built for Hackathon 2026 🚀
