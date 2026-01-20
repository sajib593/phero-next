🧩 Next.js App Router Demo Project
📌 Project Description

This is a simple demo application built using Next.js 15/16 (App Router) and Express.js.
The project demonstrates public pages, mock authentication, route handling, and fetching product data from an Express API.

The main goal of this project is to showcase a clean structure, basic authentication flow, and API integration in a beginner-friendly way.



🛠️ Technologies Used

Next.js 15/16 (App Router)

React

Tailwind CSS

Express.js

Node.js

Cookies (for mock authentication)


## Project Structure (Simplified)

/app
 ├─ page.js              → Landing Page
 ├─ login/page.jsx       → Login Page
 ├─ items/page.jsx       → Item List Page
 ├─ items/[id]/page.jsx  → Item Details Page
 ├─ layout.js            → Global Layout (Navbar + Footer)

/components
 ├─ Navbar.jsx
 └─ Footer.jsx

/backend
 └─ index.js             → Express API Server




 🚀 Setup & Installation

 git clone <https://github.com/sajib593/phero-next>


 🌐 Available Routes
 ### Frontend Routes

 | Route        | Description                  | Access |
| ------------ | ---------------------------- | ------ |
| `/`          | Landing page with 7 sections | Public |
| `/login`     | Mock login page              | Public |
| `/items`     | Item list page               | Public |
| `/items/:id` | Item details page            | Public |


## Backend API Routes
| Endpoint     | Description           |
| ------------ | --------------------- |
| `/items`     | Get all items         |
| `/items/:id` | Get single item by ID |


🔐 Authentication (Mock Login)

Uses hardcoded credentials

Stores login state in cookies

No database or JWT used

## Demo Credentials
Email: admin@example.com
Password: 123456


✨ Features Implemented

✅ Landing page with 7 sections

✅ Global Navbar & Footer

✅ Mock authentication system

✅ Cookie-based login state

✅ Public item listing page

✅ Dynamic item details page

✅ Express API integration

✅ Clean and simple UI with Tailwind CSS


👨‍💻 Author

Sajib Hossain
Junior MERN Stack Developer












This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
