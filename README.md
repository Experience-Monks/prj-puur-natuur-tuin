# Puur Natuur Tuin

A website for Puur Natuur Tuin built with Next.js and Sanity CMS.

## Architecture Overview

### Frontend

- **Framework**: Next.js 15 with React 18, App Router architecture
- **Styling**: SCSS modules with utility functions (remify, clsx)
- **State Management**: Recoil for global state
- **Data Fetching**: GraphQL with typed queries via GraphQL Code Generator
- **Component Structure**:
    - Organized by sections (hero, intro, news, program, gallery, about)
    - Each component follows pattern: Component.tsx, Component.module.scss, component.transformer.tsx,
      Component.types.ts
    - Strict TypeScript usage (types over interfaces)

### Backend

- **CMS**: Sanity Studio (TypeScript)
- **Schema Structure**:
    - Documents: pages, news, program, gallery items
    - Singleton documents: siteSettings, footer, navigation
    - Components: reusable section schemas
    - Fragments: shared schema elements
- **GraphQL API**: Sanity GraphQL API for data retrieval

> **Note**: This project's architecture and structure are based on the Warba Bank project pattern, with adaptations for
> Puur Natuur Tuin's specific requirements.

## Key Flows

### Page Rendering

1. Dynamic `[[...slug]]` route captures all page requests
2. `getPageData` fetches page content from Sanity via GraphQL
3. Server-side component transformation via `transformComponents`
4. Client-side rendering via `ComponentRenderer` and `SectionRenderer`
5. Component-specific transformers adapt CMS data to component props

### Component System

1. CMS defines section components (news, program, intro, etc.)
2. Each component has a corresponding React component and transformer
3. `sectionComponentMap` links CMS types to React components
4. `sectionTransformerMap` handles data transformation
5. Sections have consistent spacing options and structure

### Component File Structure

Each component follows a consistent file structure pattern:

```
component-name/
├── ComponentName.tsx               # Main component implementation
├── ComponentName.module.scss       # Component-specific styles
├── componentName.transformer.tsx   # Data transformation logic
├── ComponentName.types.ts          # TypeScript interfaces/types
├── ComponentName.query.ts          # GraphQL query definitions
├── componentName.graphql           # Raw GraphQL query
├── ComponentName.stories.tsx       # Storybook stories
├── ComponentName.template.tsx      # Template variations 
├── ComponentName.animations.ts     # Animation definitions (if needed)
└── ComponentName.hooks.ts          # Component-specific hooks (if needed)
```

This structure ensures:

- Clear separation of concerns
- Consistent organization across components
- Easier maintenance and onboarding
- Type safety throughout the component lifecycle

## Project Setup

### Prerequisites

- Node.js ≥20
- npm ≥10

### Frontend Setup

```bash
cd source/frontend
npm ci
npm run postinstall
```

### Backend Setup

```bash
cd source/backend
npm ci
```

### Environment Configuration

Create a `.env.local` file in the `source/frontend` directory with the following variables:

```
CMS_API_URL=<your-sanity-graphql-api-url>
CMS_API_TOKEN=<your-sanity-api-token>
CMS_INCLUDE_DRAFTS=true
```

## Development

### Frontend

```bash
cd source/frontend
npm run dev          # Start development server
npm run dev:https    # Start HTTPS development server
npm run build        # Build for production
npm run codegen      # Generate GraphQL types
npm run storybook    # Run Storybook for component development
```

### Backend

```bash
cd source/backend
npm start            # Run Sanity Studio locally
npm run deploy-graphql  # Deploy GraphQL API schema
```

## Deployment

- Bitbucket Pipelines configured for CI/CD
- Static asset optimization during build (`STATIC_ASSETS_ON_BUILD=true`)
- GraphQL schema must be deployed separately for CMS updates

## Known Issues and Solutions

### GraphQL Deployment

- Avoid anonymous inline objects in schemas (use named types instead)
- Use `createComponentDocument` utility for consistent schema structure
- Ensure no duplicate schema definitions exist

### Component Transformers

- Handle null/undefined values carefully
- Use raw GraphQL query strings for server components instead of GraphQL document objects
    - This is necessary for compatibility with Next.js App Router server components
    - Direct Fetch API with raw queries works reliably in both server and client components
    - Type safety is maintained via GraphQL Code Generator
- Ensure proper sorting of items (news by date descending, programs by date ascending)

### Component Rendering

- Limited component types available in CMS (NewsSection, ProgramSection, etc.)
- Use fallbacks for missing content
- Check component transformation status before rendering

## Project Structure

This project structure follows the Warba Bank pattern with consistent organization of components and schema types:

```
source/
├── frontend/         # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js App Router pages
│   │   ├── components/  # React components
│   │   ├── graphql/  # GraphQL queries and types
│   │   ├── hooks/    # Custom React hooks
│   │   ├── styles/   # Global styles
│   │   └── utils/    # Utility functions
│   └── public/       # Static assets
└── backend/          # Sanity CMS backend
    ├── schemaTypes/  # CMS schema definitions
    │   ├── documents/  # Document schemas
    │   └── objects/    # Object schemas
    └── util/         # Utility functions
```

## Coding Standards

- TypeScript for all code
- React functional components with hooks
- SCSS modules for styling
- ESM imports
- Types instead of interfaces
- Logical properties for SCSS
- remify for px values
