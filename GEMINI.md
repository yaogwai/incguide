# IncGuide: Your Guide to Cross-Border Business

This project is a web application that serves as a comprehensive guide for entrepreneurs looking to start and grow a cross-border business. It's built with React and uses a file-based routing system. The content is written in MDX, allowing for a mix of Markdown and React components.

## Technologies

- **Framework:** React
- **Routing:** React Router
- **Styling:** Tailwind CSS
- **Content:** MDX
- **Build Tool:** Vite
- **Language:** TypeScript

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run typecheck`: Runs the TypeScript compiler to check for type errors.

## routes

- Must use relative imports in MDX files.

- Use GitHub Flavored Markdown in MDX files; specifically use GFM alert syntax instead of rolling your own.

## File Structure

```
/home/el/incguide/
├── app/
│   ├── cmpts/         # Reusable React components
│   │   ├── nav.tsx
│   │   ├── sidebar.tsx
│   │   └── ToC.tsx
│   ├── routes/        # Application routes (MDX files)
│   │   ├── _index.tsx
│   │   ├── _page.incorporation.mdx
│   │   ├── _page.intro.mdx
│   │   ├── _page.stripe.mdx
│   │   ├── _page.taxes.mdx
│   │   └── _page.tsx
│   ├── app.css        # Global CSS styles
│   ├── root.tsx       # Root React component
│   ├── routes.ts      # Route configuration
│   └── utils.ts       # Utility functions
├── public/            # Static assets
│   └── favicon.ico
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```
