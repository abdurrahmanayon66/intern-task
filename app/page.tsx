import React from 'react';
import Navbar from './components/navbar';
import View from './view'; 

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <View />
    </div>
  );
}
