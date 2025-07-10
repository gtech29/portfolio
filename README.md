# Juan Rodriguez – Personal Portfolio Website

This is the source code for [juan-rodriguez.dev](https://www.juan-rodriguez.dev), a personal portfolio site built to showcase my work in full-stack development, AI infrastructure, DevSecOps, and research-driven projects. The site highlights professional experience, selected projects, and services I offer in web development, digital systems, and emerging technologies.

## Features

- **Modern Stack:** Built with React, TypeScript, Next.js, and Tailwind CSS
- **Interactive Agents:** Real-time chat agents for each page powered by LLM backends
- **Projects Section:** Detailed write-ups of featured work including:
  - [Digital Twin System](https://www.juan-rodriguez.dev/projects/digital-twin)
  - [Central Logging System](https://www.juan-rodriguez.dev/projects/logging-system)
  - [StelEsthetics](https://www.juan-rodriguez.dev/projects/stelesthetics)
- **Responsive UI:** Mobile-first design with dark mode support and smooth UI transitions
- **Secure Contact Form:** Firebase-integrated form with reCAPTCHA for protected submissions
- **SEO and Accessibility:** Includes meta tags, Open Graph data, and ARIA best practices

## Folder Structure

src/
├── app/ # Next.js App Router pages
│ ├── layout.tsx
│ └── page.tsx
├── components/ # Reusable UI components (Hero, Footer, AboutSidebar, etc.)
├── styles/ # Global Tailwind CSS styles
├── assets/ # Images, logos, and static content

## Getting Started

1. **Clone the repo:**

```bash
git clone https://github.com/juan-cyber/juan-portfolio.git
cd juan-portfolio

Install dependencies:
npm install

Run the development server:
npm run dev
Open http://localhost:3000 in your browser.

Deployment
The site is deployed via Vercel with a custom domain: juan-rodriguez.dev

Tech Stack
Frontend: React, Next.js 14 (App Router), Tailwind CSS, TypeScript

Backend (Contact Form): Firebase Firestore + reCAPTCHA

Hosting: Vercel + GitHub

LLM Agent Backend (planned): FastAPI + OpenAI / Local LLMs (Mistral GGUF via llama.cpp)

DevOps: Docker, GitHub Actions (WIP)

Future Improvements
Integrate local LLM agent using llama.cpp for offline demos

Add project blog and research highlights

Enhance dashboard UI with real-time charts and analytics

License
MIT © Juan Rodriguez – Built to support learning, hiring, and collaboration.
```
