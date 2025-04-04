import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="header-banner"
    >
      <div className="flex justify-center items-center gap-2">
        <div className="header-badge">EXCLUSIVE</div>
        <p className="header-text">
          <span className="header-icon">🎥</span>
          <span className="hidden sm:inline font-bold mr-2">LIMITED TIME:</span>
          Special AI Video Creation Masterclass Access Closing Soon
        </p>
        <div className="header-badge pulse-badge">LIVE</div>
      </div>
    </motion.div>
  );
};
