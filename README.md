# FoodLane - Restaurant App

FoodLane is a modern restaurant app designed to provide users with an intuitive interface to browse through a variety of food options, place orders, and make payments seamlessly using Stripe integration. The project is built using the latest technologies including React, Vite, Tailwind CSS, and Firebase.

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **DaisyUI**: Tailwind CSS components library for pre-designed UI components
- **Firebase**: Provides backend services like authentication and database
- **Axios**: For making HTTP requests to external APIs
- **Stripe**: Used for handling payment integration
- **Swiper.js**: For responsive image sliders and carousels
- **React Helmet Async**: Manage the document head for SEO optimization
- **React Hook Form**: Manage and validate forms efficiently
- **React Hot Toast**: Simple and flexible notifications


## Features

- Browse and search for food items
- User authentication (Firebase)
- Stripe payment integration
- Responsive and mobile-friendly design
- Testimonials slider using Swiper.js
- Toast notifications
- Form handling with validation (React Hook Form)
- SEO optimized with React Helmet

---

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager installed
- A **Firebase** project with the necessary API keys
- A **Stripe** account with API keys

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/kader009/FoodLane.git

2. **Install all of the things**:

   ```bash
   npm install or yarn add or pnpm install

3. **Open For Local Development**:

   ```bash
   npm run dev
   yarn run dev
   pnpm run dev

## Setup Environment Variables

Before running the project, you need to set up the environment variables. Follow these steps:

1. **Create a `.env` file** in the root directory of your project.
2. Copy the contents of `.env.example` into the newly created `.env` file:

```bash
cp .env.example to .env.local  

# Firebase configuration
VITE_apiKey=your-firebase-api-key
VITE_authDomain=your-firebase-auth-domain
VITE_projectId=your-firebase-project-id
VITE_storageBucket=your-firebase-storage-bucket
VITE_messagingSenderId=your-firebase-messaging-sender-id
VITE_appId=your-firebase-app-id

# Stripe configuration
VITE_STRIPE_KEY=your-stripe-public-key

