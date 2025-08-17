'use client';
import Contact from '../../components/contact.js';
import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';

export default function ContactPage() {
  return (
    <div className="min-h-screen max-h-screen bg-black">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}
