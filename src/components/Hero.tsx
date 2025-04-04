import { motion } from 'framer-motion';
import VideoSection from './VideoSection';
import Countdown from './Countdown';
import { AnimatedBackground } from './AnimatedBackground';

export default function Hero() {
  return (
    <section className="hero-wrapper pt-28 pb-20">
      <AnimatedBackground />
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Create Epic AI Videos with Just a <span className="gradient-text">Keyword</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-16">
            Turn any idea into viral, jaw-dropping AI videos in seconds.
            From prompt to pro-level video characters, voiceovers, music, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <VideoSection />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.a 
            href="https://creativio.io/Join-RocketVideosAI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary btn-glow mb-12"
          >
            Reserve Your Spot Now
          </motion.a>

          <Countdown />
        </motion.div>
      </div>
    </section>
  );
}
