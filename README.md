
# 🛍️ Reedin – Fashion E-Commerce Platform

## 📌 Overview

Reedin is a modern, scalable fashion e-commerce web application built with a focus on performance, accessibility, and clean architecture. The platform allows users to browse products, manage carts, authenticate securely, and interact with a responsive and intuitive UI.

This project is designed to simulate a real-world production-level application while applying best practices in frontend engineering and state management.

---

## 🎯 Project Goals

* Build a fully functional e-commerce platform
* Implement secure user authentication
* Manage global state using Redux
* Ensure accessibility and responsive design
* Optimize performance with modern techniques
* Practice scalable architecture and clean code patterns

---

## 🧱 Core Features

### 🔐 Authentication

* Email & Password Sign Up / Login
* Google Authentication
* Persistent login sessions
* Protected routes for authenticated users

### 👤 User Management

* Store user data in Firebase Firestore
* Retrieve user profile after login
* Secure access to user-specific data

### 🛍️ E-Commerce Functionality

* Product listing and display
* Product detail pages
* Add to cart functionality (planned)
* Cart state management using Redux

### ❓ FAQ Section

* Accordion-based UI
* Accessible interaction patterns

---

## 🧩 Pages

* Home Page
* Shop / Product Listing Page
* Product Details Page
* Cart Page
* **Dashboard Page (Protected)**
* User Profile Page
* Login Page
* Register Page
* FAQ Page
* 404 Page

---

### 📊 Dashboard Page (Details)

The Dashboard serves as the central hub for authenticated users. It provides access to user-specific features and data.

**Features:**

* Overview of user activity
* Quick navigation to profile and cart
* Future support for order history
* Personalized user experience

**Access Control:**

* Only accessible to authenticated users
* Protected using private route logic

---

---

## 🧠 Architecture

The application follows a modular and scalable architecture:

* **UI Layer** → React components
* **Hooks Layer** → Custom hooks (`useAuth`)
* **Service Layer** → Firebase interactions
* **State Layer** → Redux (global state management)
* **Backend (BaaS)** → Firebase (Auth + Firestore)

---

## 🛠️ Tech Stack

### Frontend

* React (UI Library)
* React Router (Routing)
* CSS / Tailwind (Styling)

### State Management

* Redux (Global state management)

### Backend Services

* Firebase Authentication (User auth)
* Firebase Firestore (Database)
* Firebase Hosting (Deployment)

### Dev Tools

* Git & GitHub (Version control)
* GitHub Actions (CI/CD)
* Vitest (Unit testing)

### Additional Libraries

* Fuse.js (Fuzzy search)
* Cloudinary (Image hosting – optional)

---

## ⚙️ Key Concepts Implemented

* Custom Hooks (`useAuth`)
* Protected Routes
* Authentication state persistence
* Firestore data modeling
* Separation of concerns
* Component reusability
* Lazy loading & performance optimization

---

## 🚀 CI/CD

* Automated build pipeline using GitHub Actions
* Deployment to Firebase Hosting
* Continuous integration on push to main branch

---

## ♿ Accessibility

* Semantic HTML structure (`header`, `main`, `nav`, `footer`)
* Keyboard navigable components
* Proper form labels and validation
* Accessible accordion components
* Color contrast compliance (WCAG AA)

---

## ⚡ Performance Optimization

* Lazy loading components
* Code splitting
* Optimized image handling
* Preventing unnecessary re-renders

---

## 📂 Project Structure

```
src/
  components/
  pages/
  hooks/
  services/
  firebase/
  redux/
  routes/
```

---

## 🔒 Security

* Firebase Authentication for secure login
* Firestore rules to restrict data access
* Protected routes for private pages

---

## 📈 Future Improvements

* Payment integration (Stripe)
* Admin dashboard
* Order history system
* Wishlist functionality
* Product reviews & ratings

---

## 👨‍💻 Author

Built by Eloghosa as part of a learning and real-world application development journey.

---
