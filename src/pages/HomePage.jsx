import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Process from '../components/Process';
import DashboardPreview from '../components/DashboardPreview';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="app-shell">
      {/* Decorative background glow for a polished landing page look */}
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <DashboardPreview />
        <Benefits />
        <Testimonials />
      </main>
      {/* Footer groups project info and contact details */}
      <Footer />
    </div>
  );
}

export default HomePage;
