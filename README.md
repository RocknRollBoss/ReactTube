# 📺 React Tube

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/TailwindCSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/UI](https://img.shields.io/badge/shadcn/ui-black?style=flat)](https://ui.shadcn.com/)
[![RTK Query](https://img.shields.io/badge/RTK%20Query-593D88?style=flat&logo=redux&logoColor=white)](https://redux-toolkit.js.org/rtk-query/overview)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

## Project Overview

React Tube is a modern YouTube-like frontend application built with React, TypeScript, and Vite, featuring full JWT authentication, personalized favorites, subscriptions, and video browsing.

The app fetches data using:

- RapidAPI: youtube-v3-lite
- YouTube Data API v3

It allows users to:

- Search for videos
- Browse categories
- View video details
- Watch playlists
- Read comments
- View channel pages with their videos
- Add videos to favorites
- Subscribe to channels
- View related videos
- Switch between Light / Dark theme
- Authenticate with JWT

Deployed on Vercel.

Live Demo: https://react-tube-ezar.vercel.app/

## Features

Video Features

- Video search
- Categories browsing
- Video player / detail page
- Related videos suggestions
- Playlists
- Comments section
- Add videos to favorites
- Subscribe to channels
- View channel page with videos
- Light / Dark mode toggle

Authentication

- JWT Login / Register
- Protected routes
- Persisted auth state via RTK Query

UI / UX

- TailwindCSS styling
- Shadcn/UI components
- Fully responsive layout
- Light / Dark theme switch
- Clean, modern interface

## Tech Stack

| Technology    | Purpose                |
| ------------- | ---------------------- |
| React (Vite)  | Core framework         |
| TypeScript    | Type safety            |
| RTK Query     | API requests & caching |
| React Router  | Routing                |
| TailwindCSS   | Styling                |
| Shadcn/UI     | Reusable components    |
| Axios / Fetch | API requests           |

## Project Structure

```
app/
components/
features/
hooks/
utils/
lib/
pages/
routes/
```

Folder Description

- app – App root and providers
- components – Reusable UI components
- context – Theme / auth contexts
- features – Video, favorites, subscriptions, auth logic
- hooks – Custom hooks
- layouts – Shared layouts
- lib – API helpers, config
- pages – Route pages
- routes – Routing configuration

## Screenshots (placeholder)

```
public/screenshots/
```


```

## Running the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Deployment

- Frontend: Vercel

## Notes

- .env should contain your API keys for RapidAPI and YouTube Data API.
- JWT token stored locally for authentication.
- RTK Query manages caching and request deduplication.
- Theme preference (Light / Dark) is stored in localStorage for persistence.
