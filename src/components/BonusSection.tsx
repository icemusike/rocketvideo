import { motion } from 'framer-motion';

export default function BonusSection() {
  return (
    <section className="py-20 bonus-section">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bonus-content text-center"
        >
          <span className="text-sm uppercase font-bold tracking-wider text-purple-400 mb-2 block">EXCLUSIVE OPPORTUNITY</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
            $3,885 BONUS Package Bonanza!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Register your seat today and automatically qualify for our exclusive bonus package 
            valued at over <span className="font-bold text-white">$3,885</span>. 
            <a href="/bonuses.html" className="text-pink-500 underline hover:text-pink-400 transition-colors">Click here to see all bonuses!</a>
          </p>
          
          <div className="bonus-features mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bonus-feature-item">
                <div className="feature-icon">🚀</div>
                <h3 className="font-bold text-xl mb-2">Mystery Bonuses</h3>
                <p className="text-gray-400">Special tools and resources to accelerate your success</p>
              </div>
              <div className="bonus-feature-item">
                <div className="feature-icon">🎁</div>
                <h3 className="font-bold text-xl mb-2">Limited Time</h3>
                <p className="text-gray-400">This bonus package will not be available forever</p>
              </div>
              <div className="bonus-feature-item">
                <div className="feature-icon">💰</div>
                <h3 className="font-bold text-xl mb-2">$3,885 Value</h3>
                <p className="text-gray-400">Get massive value that will help fast-track your journey</p>
              </div>
            </div>
          </div>
          
          <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a 
              href="https://creativio.io/Join-RocketVideosAI"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary btn-glow"
            >
              Register Now & Secure Your Bonus
            </motion.a>
            
            <motion.a 
              href="/bonuses.html"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary border border-pink-500 text-pink-500 hover:bg-pink-500/10 px-6 py-3 rounded-lg font-semibold transition-all"
            >
              View All Bonuses
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 