# Full-Stack E-Commerce + Dashboard & CMS

## Overview

This is a full-featured e-commerce platform built with Next.js 13, Tailwind, Prisma, and MySQL. It includes a feature-rich admin dashboard that also serves as a CMS and API. The dashboard is capable of handling multiple vendors and stores.

![dashboard](https://github.com/pchuchat/E-Commerce/assets/84800814/bc583255-883a-49c8-b90c-2164e2eb7598)

## Features

- **Shadcn UI for Admin Dashboard**
  - Functions as CMS, Admin, and API.
- **Multi-Vendor Support**
  - Handle multiple stores through a single CMS.
- **CRUD Operations**
  - Manage categories, products, filters, and billboards.
- **Advanced Search**
  - With included pagination.
- **Order and Sales Management**
- **Revenue Analytics**
- **Authentication**
  - Using Clerk.
- **Payment**
  - Stripe checkout and webhooks.

## Tech Stack

- Next.js 13
- React
- Tailwind
- Prisma
- MySQL
- Stripe
- Clerk for Authentication

## Environment Setup

Copy `.env.example` to `.env` and populate the variables:

```env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL=''
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""
STRIPE_API_KEY=
FRONTEND_STORE_URL=http://localhost:3001
STRIPE_WEBHOOK_SECRET=
````
## Installation
Install dependencies:

```bash
npm install
```

Generate Prisma client and push to the database:

```bash
npx prisma generate
```
```bash
npx prisma db push
```
Run the development server:

```bash
npm run dev
```

## License
MIT License. See LICENSE for more details.
