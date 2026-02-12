import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Founder from './components/Founder';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WaitlistModal from './components/WaitlistModal';

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onJoinWaitlist={openWaitlist} />
      
      <main>
        <Hero onJoinWaitlist={openWaitlist} />
        <Features onJoinWaitlist={openWaitlist} />
        <Founder />
        <Pricing onJoinWaitlist={openWaitlist} />
      </main>

      <Footer />

      <WaitlistModal isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
}