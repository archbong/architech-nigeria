# Architech Nigeria 🇳🇬

> Digital infrastructure for ambitious businesses.

**Architech Nigeria** is a software engineering and design studio building scalable SaaS platforms, digital products, and brand systems for growth-focused companies across Africa and globally.

---

## 🧭 Overview

This repository contains the frontend application for the Architech Nigeria platform — a multi-domain system that includes:

- 💼 Software development services
- 🎨 Product design & branding
- 🎓 Tech education (academy)
- 🛍️ Ecommerce (developer-focused merchandise)
- ✍️ Content platform (blog & insights)

The system is built with scalability, performance, and modular architecture in mind.

---

## ⚙️ Tech Stack

| Category        | Technology                          |
|----------------|-------------------------------------|
| Framework      | React 18 + TypeScript               |
| Build Tool     | Vite                                |
| Styling        | Tailwind CSS                        |
| Routing        | React Router                        |
| Forms          | React Hook Form + Zod               |
| SEO            | React Helmet Async                  |
| State (UI)     | Zustand / Context API (extensible)  |
| Icons          | Lucide React                        |
| Notifications  | Sonner                              |

---

## 📁 Project Structure

```

src/
├── app/
│   └── routes/              # Route-level pages
│       ├── home.tsx
│       ├── services.tsx
│       ├── portfolio.tsx
│       ├── contact.tsx
│       ├── about.tsx
│       ├── academy.tsx
│       ├── blog.tsx
│       ├── store/
│       └── legal/
│
├── components/
│   ├── layout/              # Navbar, Footer, Layout wrappers
│   ├── sections/            # Page sections (Hero, CTA, etc.)
│   ├── shared/              # SEO, Providers, utilities
│   └── ui/                  # Reusable UI primitives
│
├── features/                # Domain-driven modules
│   └── services/
│       ├── quote-calculator/
│       └── service-components/
│
├── hooks/                   # Custom React hooks
├── lib/                     # Helpers, configs, constants
├── types/                   # Global TypeScript types
└── assets/                  # Static assets

````

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

---

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR-USERNAME/architech-nigeria.git

# Enter project directory
cd architech-nigeria

# Install dependencies
npm install

# Start development server
npm run dev
````

App runs on:

```
http://localhost:5173
```

---

### 🏗️ Production Build

```bash
npm run build
npm run preview
```

---

## 🗺️ Application Routes

| Page             | Route                      | Description                        |
| ---------------- | -------------------------- | ---------------------------------- |
| Home             | `/`                        | Landing page with service overview |
| Services         | `/services`                | Detailed service offerings         |
| Portfolio        | `/portfolio`               | Case studies and projects          |
| Portfolio Detail | `/portfolio/:slug`         | Individual project breakdown       |
| Academy          | `/academy`                 | Courses and training               |
| Academy Detail   | `/academy/:slug`           | Course detail page                 |
| Blog             | `/blog`                    | Articles and insights              |
| Blog Post        | `/blog/:slug`              | Individual article                 |
| Store            | `/store`                   | Product listing                    |
| Product Detail   | `/store/:id`               | Product page                       |
| Cart             | `/store/cart`              | Shopping cart                      |
| Checkout         | `/store/checkout`          | Payment flow                       |
| Contact          | `/contact`                 | Inquiry and booking                |
| About            | `/about`                   | Company profile                    |
| Legal            | `/privacy`, `/terms`, etc. | Policies                           |
| 404              | `*`                        | Not found page                     |

---

## 🎨 Key Features

* 🌗 **Dark/Light Mode** — System-aware theme support
* 💰 **Quote Calculator** — Dynamic service pricing estimator
* 📱 **Responsive Design** — Optimized for all screen sizes
* 🔍 **SEO Optimization** — Metadata, Open Graph, structured content
* ⚡ **Performance Optimized** — Vite bundling & code splitting
* 🛒 **Ecommerce System** — Cart and checkout flow
* 🎓 **Learning Platform** — Course catalog and curriculum structure
* ✍️ **Content Engine** — Blog with scalable structure

---

## 🧠 Architecture Principles

* **Modular Design** — Feature-based separation
* **Scalability First** — Built to support SaaS expansion
* **Separation of Concerns** — UI, logic, and data isolated
* **Reusability** — Shared component system
* **Performance Awareness** — Lazy loading and optimized builds

---

## 🌐 Deployment

Hosted on **Vercel** for optimal frontend performance.

```bash
# Install CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

---

## 🤝 Contributing

Contributions are currently limited to internal development.

For collaboration inquiries:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request with detailed context

---

## 📧 Contact

* **Email:** [hello@architech.ng](mailto:hello@architech.ng)
* **Website:** [https://architech.ng](https://architech.ng)
* **Location:** Lagos, Nigeria

---

## 📄 License

This project is proprietary and not open-source.
All rights reserved © Architech Nigeria.

---

## ⚡ Brand Philosophy

We don’t just build software —
we engineer **digital infrastructure for scale**.

---

Built in 🇳🇬 for the global market.

