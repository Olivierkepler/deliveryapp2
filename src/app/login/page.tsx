// /src/app/login/page.tsx
'use client';
import React, { useState } from 'react';

export default function SignUpPage() {
  // State for user input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for feedback messages
  const [message, setMessage] = useState('');

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload

    // Logging user inputs for debugging
    console.log('Form submitted with:', { name, email, password });

    try {
      // Make the API call
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json(); // Parse JSON response

      // Handle success and error responses
      if (response.ok) {
        setMessage(data.message || 'Sign up successful!');
      } else {
        setMessage(data.message || 'Error: Unable to sign up.');
      }
    } catch (error) {
      // Catch and handle network or unexpected errors
      console.error('Error occurred:', error);
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-gray-100 p-6 rounded shadow-md w-full max-w-sm"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
      {message && (
        <div className="mt-4 text-center text-lg text-gray-700">{message}</div>
      )}
    </div>
  );
}
