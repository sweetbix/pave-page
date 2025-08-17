import Header from '../components/Header';
import Hero from '../components/Hero';
import Break from '../components/Break';
import Footer from '../components/Footer';
import Features  from '../components/Features';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Break />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
