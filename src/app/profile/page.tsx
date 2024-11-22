'use client'; // Enable client-side rendering if needed for interactivity

import { useState } from 'react';

export default function ProfilePage() {
  const [userName, setUserName] = useState("John Doe");

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userName}</p>
      <button onClick={() => setUserName("Jane Doe")}>Update Name</button>
    </div>
  );
}
