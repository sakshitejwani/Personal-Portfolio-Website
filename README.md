# Sakshi Tejwani — Portfolio

A clean, beginner-friendly React portfolio website.

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← HTML shell (browser entry point)
├── package.json                ← Dependencies list
├── vite.config.js              ← Build tool config (don't touch)
└── src/
    ├── main.jsx                ← React entry point (don't touch)
    ├── App.jsx                 ← Assembles all sections
    ├── index.css               ← Global styles & CSS variables
    └── components/
        ├── Navbar.jsx / .css   ← Top navigation bar
        ├── Hero.jsx / .css     ← Landing banner + stats
        ├── About.jsx / .css    ← Bio, photo, education
        ├── Skills.jsx / .css   ← Tech skills grid
        ├── Experience.jsx/.css ← Work history timeline
        ├── Projects.jsx / .css ← Project cards
        ├── Contact.jsx / .css  ← Contact form + links
        └── Footer.jsx          ← Footer
```

---

## 🚀 How to Run Locally

Make sure you have **Node.js** installed (download from nodejs.org).

Open your terminal and run these commands one by one:

```bash
# 1. Go into the project folder
cd portfolio

# 2. Install dependencies (only needed once)
npm install

# 3. Start the dev server
npm run dev
```

Then open your browser and go to: **http://localhost:5173**

---

## ✏️ How to Customize

### Change your name / bio
→ Edit `src/components/Hero.jsx` and `src/components/About.jsx`

### Add your photo
1. Put your photo file (e.g. `sakshi.jpg`) in the `/public` folder
2. Open `src/components/About.jsx`
3. Find the `about-photo-placeholder` div and replace it with:
   ```jsx
   <img src="/sakshi.jpg" alt="Sakshi Tejwani" />
   ```

### Add your resume PDF
1. Put your resume PDF in the `/public` folder
2. It's already linked in `Navbar.jsx` as `/Sakshi_Tejwani_Resume.pdf`

### Add a new project
→ Open `src/components/Projects.jsx` and add a new object to the `projects` array

### Add a new job
→ Open `src/components/Experience.jsx` and add a new object to the `experiences` array

### Change colors
→ Open `src/index.css` and edit the CSS variables at the top:
```css
:root {
  --blue: #2563eb;       ← Main accent color
  --text-dark: #111827;  ← Headings
  ...
}
```

### Make the contact form send real emails
1. Go to **formspree.io** and create a free account
2. Create a new form → you'll get a URL like `https://formspree.io/f/yourcode`
3. Open `src/components/Contact.jsx`
4. Find `<form>` and change it to:
   ```jsx
   <form action="https://formspree.io/f/yourcode" method="POST">
   ```

---

## 🏗️ Build for Deployment

```bash
npm run build
```

This creates a `/dist` folder with your production-ready site.
Upload the `/dist` folder to Vercel, Netlify, or GitHub Pages.
