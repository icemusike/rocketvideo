import Hero from './components/Hero';
import Features from './components/Features';
import BonusSection from './components/BonusSection';
import FounderSection from './components/FounderSection';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <Hero />
      <FounderSection />
      <Features />
      <BonusSection />
      <Footer />
    </div>
  );
}

export default App;
