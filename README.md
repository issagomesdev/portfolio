# Developer Portfolio 

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Status](https://img.shields.io/badge/status-live-brightgreen?style=for-the-badge)

![Preview do site](https://media.byissa.dev/portfolio/preview.png)

<p align="center">
  <a href="#about">About</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#structure">Structure</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#related-projects">Related Projects</a>
</p>

**Portfolio** is a personal developer portfolio built to present projects, skills, services, and professional experience. It consumes a dedicated REST API and renders project content from Markdown files, offering a dynamic and fully data-driven experience.

This codebase handles the **Frontend** experience, developed in **React 19** + **TypeScript** + **Vite** + **Material UI** to create a responsive and polished interface.

🔗 The backend API developed with Node.js + Express is available [here](https://github.com/issagomesdev/portfolio-api).

<h2 id="about"> 📌 About</h2>

This portfolio was built to showcase development work in an interactive and content-rich way. Each project has its own detail view rendered from a Markdown file stored in the API's public folder, enabling rich formatting with syntax highlighting, images, and structured documentation — without rebuilding or redeploying the frontend.

💻 You can check the live version at [byissa.dev](https://byissa.dev/)

<h2 id="technologies"> 🧪 Technologies</h2>

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Material UI v6](https://mui.com/) + [Emotion](https://emotion.sh/)
- [React Router v7](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown) + [rehype-raw](https://github.com/rehypejs/rehype-raw)
- [Motion](https://motion.dev/)
- [Sonner](https://sonner.emilkowal.ski/)

<h2 id="structure"> 📁 Structure</h2>

```
src/
├── assets/                  # Static assets (images, icons)
├── controllers/             # Data fetching logic (project, section)
├── pages/                   # Application pages (single-page with scroll sections)
├── routes/                  # React Router route definitions
├── services/                # API service layer (axios instance + per-resource services)
├── shared/
│   ├── components/          # React components
│   └── context/             # React contexts (ScrollContext)
├── styles/                  # Global CSS styles
└── types/                   # TypeScript interfaces (Project, Tech, Category…)
```

<h2 id="getting-started">▶️ Getting Started</h2>

### Requirements

- [Node.js](https://nodejs.org/) 18+
- Backend API running (portfolio-api)

### Environment variables

Copy and configure the environment variables:

```bash
cp .env.example .env
```

```env
VITE_API_URL=http://localhost:3000
```

### Running locally

```bash
# Clone the repository
git clone https://github.com/issagomesdev/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for production

```bash
npm run build
npm run preview
```

<h2 id="related-projects">🔗 Related Projects</h2>

🧱 Backend (Node.js + Express API) repository [here](https://github.com/issagomesdev/portfolio-api)
