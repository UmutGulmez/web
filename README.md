# 🚀 Umut Utku — Portfolio Website

> A portfolio website.

[![Nuxt](https://img.shields.io/badge/Nuxt-4.0.3-00DC82?style=flat&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.20-4FC08D?style=flat&logo=vue.js&logoColor=white)](https://vuejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-6.14.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

**Live Site:** [umututku.com](https://umututku.com)

---

## ✨ Features

### 🔧 Technical Highlights
- **Nuxt 4** — Latest version with full TypeScript support
- **Native SQLite** — Using Node.js native SQLite instead of better-sqlite3 for content management
- **SEO Optimized** — Comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
- **Content Management** — Nuxt Content v3 for markdown-based blog posts
- **Performance** — Optimized images with @nuxt/image module

---

## 🛠️ Tech Stack

### Core Framework
- **[Nuxt 4](https://nuxt.com)** — Vue.js meta-framework for production
- **[Vue 3](https://vuejs.org)** — Progressive JavaScript framework
- **[TypeScript](https://www.typescriptlang.org)** — Type-safe development

### Styling
- **[TailwindCSS](https://tailwindcss.com)** — Utility-first CSS framework
- **[Sass](https://sass-lang.com)** — CSS preprocessor for advanced styling

### Content & Data
- **[Nuxt Content](https://content.nuxt.com)** — File-based CMS with native SQLite
- **[Gray Matter](https://github.com/jonschlinkert/gray-matter)** — Front matter parser
- **[Marked](https://marked.js.org)** — Markdown parser and compiler

### Development Tools
- **[@nuxt/eslint](https://eslint.nuxt.com)** — Code linting and formatting
- **[@nuxt/image](https://image.nuxt.com)** — Optimized image handling
- **Vue Router** — Client-side routing

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 22.5.0 or higher (for native SQLite support)
- **npm** or **pnpm** or **yarn** or **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/UmutGulmez/web.git
   cd web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run generate` | Generate static site |
| `npm run preview` | Preview production build locally |

---

## 📁 Project Structure

```
web/
├── app/
│   ├── components/
│   ├── pages/          
│   ├── layouts/
│   └── app.vue                       # Root component with SEO
├── content/
│   └── blog/                         # Markdown blog posts
├── public/                           # Static assets
├── utils/                            # Utility functions
├── nuxt.config.ts                    # Nuxt configuration
├── content.config.ts                 # Content module config
└── tailwind.config.js                # Tailwind configuration
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Generate Static Site

```bash
npm run generate
```

This creates a `.output/public` directory with static files ready for deployment.

### Deployment Platforms
- **Vercel** — Recommended for Nuxt apps
- **Netlify** — Easy static site hosting
- **Cloudflare Pages** — Fast global CDN
- **GitHub Pages** — Free static hosting

---

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is private and proprietary. All rights reserved © 2026 Umut Utku.

---

## 👤 Author

**Umut Utku**

- Website: [umututku.com](https://umututku.com)
- GitHub: [@UmutGulmez](https://github.com/UmutGulmez)
- Twitter: [@umutpy](https://twitter.com/umutpy)

---

<div align="center">

**Built with ❤️ using Nuxt 4 & Vue 3**

⭐ Star this repo if you find it helpful!

</div>
