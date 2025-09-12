# Ecommerce‑Clothing

A full‑stack e‑commerce clothing shop built with **React/Redux (TypeScript)** on the frontend and **Node/Express (TypeScript)** on the backend. The project integrates **Firebase** (authentication, persistence) and **Stripe** (secure payments).

**Live Demo:** [https://ecom-clothing-shop.herokuapp.com/](https://ecom-clothing-shop.herokuapp.com/) _(Stripe test mode, Firebase auth)_

---

## Features

- Product catalog with categories and filtering
- User authentication and session persistence (Firebase)
- Shopping cart with Redux state management and persistence (redux‑persist)
- Checkout flow with client‑side validation
- Secure payment processing via Stripe (server‑side Payment Intent)
- Responsive UI styled with SCSS and styled‑components
- Progressive web app support (Workbox for caching, background sync, etc.)

---

## Tech Stack

**Frontend**

- React 17 + TypeScript
- Redux Toolkit, Redux‑Saga, Reselect
- React Router DOM
- Firebase (auth + storage)
- SCSS modules, Styled‑components
- Stripe Checkout integration

**Backend**

- Node.js 14 + Express
- TypeScript
- Stripe SDK
- Express‑SSLify, Compression
- Deployed with Heroku (includes postbuild script)

---

## Project Structure

```
client/             # React app (catalog, cart, checkout)
server.ts           # Express server entry (TS)
controllers/        # Payment controller (Stripe)
routes/             # API routes (payments, products)
```

---

## Setup

**Requirements:** Node 14+, npm 6+

```bash
# install dependencies
npm install
cd client && npm install

# set environment variables
# SERVER .env:
#   STRIPE_SECRET_KEY=sk_test_...
# CLIENT .env:
#   REACT_APP_STRIPE_KEY=pk_test_...
#   FIREBASE_* (API key, projectId, etc.)

# run both client and server
npm run dev
```

Server runs on **:5000**, client on **:4200**.

---

## Example API (Backend)

- `POST /payments/create-intent` → creates Stripe Payment Intent
- `GET /products` → returns mock product list

---

## Learning Outcomes

- Built a production‑like full‑stack system with clear **client/server separation**.
- Gained experience integrating **Firebase authentication** and **Stripe payments** securely.
- Practiced **state management at scale** with Redux Toolkit + Saga and persistence.
- Implemented **progressive web features** for offline support and caching.
