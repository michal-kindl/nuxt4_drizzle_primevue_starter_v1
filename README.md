# Nuxt + Drizzle Starter

A minimal project starter built with **Vue 3**, **Nuxt 4**, **Drizzle ORM**, **MySQL**, and **PrimeVue** — intended as a clean starting point for fullstack Nuxt apps with a typed DB layer and a polished UI component library.

![alt text](docs/readme-image.png)

## ⭐ Highlights

- **Framework:** Vue 3 + Nuxt 4 (Nitro)
- **ORM:** Drizzle ORM (Type-safe SQL mappings)
- **DB:** MySQL
- **UI:** PrimeVue
- **Language:** TypeScript

## 🔧 Tech stack & links

- Vue 3 — https://vuejs.org/
- Nuxt 4 — https://nuxt.com/
- Drizzle ORM — https://drizzle.team/
- MySQL — https://www.mysql.com/
- PrimeVue — https://www.primefaces.org/primevue/
- Nitro (Nuxt server engine) — https://nitro.unjs.io/
- TypeScript — https://www.typescriptlang.org/

## 🏛️ Architecture

```mermaid
flowchart LR
  Browser --> NuxtApp[Nuxt 4, Vue 3]
  NuxtApp --> API[Nitro Server API]
  API --> Drizzle[Drizzle ORM]
  Drizzle --> DB[MySQL]
  NuxtApp --> UI[PrimeVue Components]
  subgraph Server
    API
    Drizzle
  end
```

## 📦 Project structure (key files)

- `app/` — Nuxt application entry (`app.vue`)
- `server/api/` — server endpoints (e.g. `users.get.ts`)
- `server/db/` — database client & schema
  - `server/db/client.ts` — DB client setup
  - `server/db/schema.ts` — Drizzle schema for server
- `drizzle/` — Drizzle schema & migration helpers (`drizzle/schema.ts`)
- `public/` — static files

## 🚀 Setup

1. Install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

2. Create a `.env` file at project root and set your DB connection string (example):

```
DATABASE_URL=mysql://user:password@localhost:3306/dbname
```

3. Run the development server:

```bash
# npm
npm run dev

# pnpm
pnpm dev
```

Access the app at `http://localhost:3000`.

## 💾 Database / Migrations

This starter uses **Drizzle ORM** — follow Drizzle docs for generating and running migrations. Typical workflow (see Drizzle docs for exact commands for your setup):

- Define or update schemas in `drizzle/schema.ts` and `server/db/schema.ts`
- Use the Drizzle CLI / drizzle-kit to create and apply migrations

## 🧪 Testing & Linting

Add your preferred testing tools (Vitest/Jest) and linters (ESLint/Prettier) as needed.

## 📚 Resources

- Nuxt docs: https://nuxt.com/docs
- Drizzle docs: https://drizzle.team/
- PrimeVue docs: https://www.primefaces.org/primevue/

---

Made with ❤️ — feel free to customize this starter to fit your needs.
