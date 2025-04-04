import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Ready to Transform Your Video Creation?
        </h2>
        <p className="text-xl mb-12">
          No Monthly Fee - Premium Support Included!
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white text-primary rounded-lg font-semibold"
        >
          Get Your Access Now
        </motion.button>
      </div>
    </section>
  );
}
