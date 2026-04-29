# Toploc Consult – Privacy Policy

A clean, production-ready privacy policy page built with **Next.js 14**, ready to deploy on Vercel.

---

## Project Structure

```
toploc-privacy/
├── app/
│   ├── layout.js       # Root layout (fonts, metadata)
│   ├── page.js         # Privacy policy page
│   └── globals.css     # All styles
├── next.config.js
├── package.json
└── .gitignore
```

---

## How to Push to GitHub

### Step 1 — Install Git (if you haven't)
Download from https://git-scm.com and install it.

### Step 2 — Create a GitHub account
Go to https://github.com and sign up for a free account.

### Step 3 — Create a new repository on GitHub
1. Click the **+** icon (top right) → **New repository**
2. Name it `toploc-privacy-policy`
3. Keep it **Public** (required for free Vercel deploys)
4. Do NOT tick "Add a README" — leave everything unchecked
5. Click **Create repository**

### Step 4 — Open your terminal
- **Windows**: Search "Command Prompt" or "PowerShell"
- **Mac**: Search "Terminal"

### Step 5 — Navigate to your project folder
```bash
cd path/to/toploc-privacy
```
Replace `path/to/toploc-privacy` with the actual folder path on your computer.

### Step 6 — Run these commands one by one
```bash
git init
git add .
git commit -m "Initial commit – privacy policy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/toploc-privacy-policy.git
git push -u origin main
```
Replace `YOUR_USERNAME` with your actual GitHub username.

> GitHub will ask for your username and password the first time. Use a **Personal Access Token** as the password — create one at: GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)

---

## How to Deploy on Vercel

1. Go to https://vercel.com and log in with your GitHub account
2. Click **Add New Project**
3. Find and select `toploc-privacy-policy` from your repos
4. Vercel auto-detects Next.js — just click **Deploy**
5. Done! You'll get a live URL like `https://toploc-privacy-policy.vercel.app`

Use that URL as the privacy policy link in all your apps.

---

## Local Development

```bash
npm install
npm run dev
```
Open http://localhost:3000 in your browser.
