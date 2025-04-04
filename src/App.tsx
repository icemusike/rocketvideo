import Hero from './components/Hero';
import Features from './components/Features';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
