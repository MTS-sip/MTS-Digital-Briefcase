import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/* react defined but never used
import React from "react";
*/ 


const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center p-4 text-xl font-bold">
        My Portfolio
      </header>
      
      {/* Main Content */}
      <main className="flex-grow p-6 text-center">
        <h1 className="text-3xl font-semibold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-700">This is where my projects and skills are showcased.</p>
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center p-3">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default Portfolio;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
