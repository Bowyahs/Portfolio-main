This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




~~~~~~~~~~~Portfolio Build Log~~~~~~~~~~~~


1. Initialize Next.js Project
    Command: npx create-next-app@latest . --ts
    Created a Next.js + TypeScript project to start the portfolio.

2. Install Tailwind CS
    Command: npm install -D tailwindcss postcss autoprefixer 
             npx tailwindcss init -p
    Setup Tailwind CSS for styling so we can write modern, utility-based CSS easily.

3. Multi-Page Structure Setup (Updated)

    Create folders: projects, experience, about, education, skills, contact, resume in app/
    Create page.tsx in each folder with minimal content

Setup basic multi-page structure for navigation and section-wise development.

4. Add Navbar
    Created components/Navbar.tsx with links to all pages
    Added Navbar to app/layout.tsx

Navigation bar for moving between pages easily

5. Test Project & Tailwind Setup
    Command: npm run dev

Verify development server runs, Tailwind works, and Navbar + pages render correctly.

6. Home Page Hero Section
    Updated app/page.tsx with a minimal Hero section (title, subtitle, button)

7. Tailwind CSS Setup
    Use Tailwind CSS v4 for styling instead of writing custom CSS.
    Utility-first framework → style directly in JSX.
    Dark mode and responsive design supported.

Installation - npm install @tailwindcss/postcss

In order to use Tailwind CSS
-install tailwind and required plugin(postcss.config.js)
-configure postcss : tells our project to use Tailwind classes in CSS
-import tailwind in global CSS

8. 