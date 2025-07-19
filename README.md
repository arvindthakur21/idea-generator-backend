# 🚀 AI Idea Generator

A fullstack web app that generates creative AI project ideas based on any topic you enter.  
Built with **HTML/CSS/JS (Frontend)** and **Node.js/Express (Backend)**.  
Frontend is hosted on **Netlify**, backend on **Render**.

---

## 🌐 Live Demo

- **Frontend:** [http://ai-genrate-ar.netlify.app](http://ai-genrate-ar.netlify.app)  
- **Backend API:** [https://ai-idea-api.onrender.com/generate](https://ai-idea-api.onrender.com/generate)

---

## 📸 Features

- 🔮 Generate AI ideas based on any topic (e.g., "health", "education")
- 🧠 Simple fake AI logic (can be upgraded with real LLM APIs)
- 💾 Saves the last 10 generated ideas in browser (localStorage)
- 📜 Toggle to show/hide idea history
- 💡 Beautiful particle background using `tsParticles`

---

## 🧩 Tech Stack

| Frontend         | Backend             |
|------------------|---------------------|
| HTML, CSS, JS     | Node.js, Express.js |
| tsParticles.js   | CORS                |
| LocalStorage     | JSON API Endpoint   |
| Hosted on Netlify| Hosted on Render    |

---

## ⚙️ API Endpoint

`POST /generate`

- **Request Body**:
```json
{
  "topic": "finance"
}
