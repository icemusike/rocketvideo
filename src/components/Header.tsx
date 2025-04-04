import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="header-banner"
    >
      <p className="header-text">
        <span className="header-icon">🎥</span>
        Special Video Presentation for Adrian's Inner Circle
      </p>
    </motion.div>
  );
};
