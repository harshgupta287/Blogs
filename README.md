# 📝 Blog Application

A full-featured **MERN Stack Blog Application** where users can:

- ✅ Sign Up / Login (JWT authentication)  
- ✅ Read Blogs  
- ✅ Post Blogs with images  
- ✅ Filter Blogs by Category  
- ✅ Search Blogs  
- ✅ View Related Blogs  
- ✅ Like & Comment on Blogs
- ✅ Profile Photo (Cloudinary)

---

## 🌐 Live Demo  

🔗 [Click here to view the live application](https://blogs-3iho.vercel.app/)  
---

## 🚀 Tech Stack

**Frontend:** React, TailwindCSS, Firebase (for storage/auth helper if used)  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Authentication:** JWT  
**File Uploads:** Cloudinary  
**State Management:** React Hooks / Context API

---

## 📸 Screenshots  

### 🔐 Authentication Pages  
![Authentication](./screenshots/auth.png)  

### 📰 Blogs Section  
![Blogs](./screenshots/blogs.png)  

### ✍️ Post Blog  
![Post Blog](./screenshots/post.png)  


---

## ⚙️ Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/harshgupta287/Blogs.git
cd Blogs
```

## Backend Setup

```bash
cd api
npm install
npm run dev
```

## Frontend Setup

```bash
cd client
npm install
npm run dev
```

## 🔑 Environment Variables

### Create a .env file in both backend and frontend folders with the following:

### Backend (/api/.env)

```bash
PORT=3000
FRONTEND_URL='http://localhost:5173'
MONGODB_CONN=your_mongodb_connection
JWT_SECRET=your_jwt_secret
NODE_ENV="development"
CLOUDINARY_APP_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Frontend (/frontend/.env)
```bash
VITE_API_BASE_URL="http://localhost:3000/api"
VITE_FIREBASE_API=your_firebase_api
```
