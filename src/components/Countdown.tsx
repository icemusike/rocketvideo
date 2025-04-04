import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="countdown-item"
    >
      <div className="countdown-number">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="countdown-label">{label}</div>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 23,
    minutes: 36,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-wrapper">
      <motion.h4 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-base md:text-lg font-semibold text-center mb-4 text-gray-300"
      >
        Limited Time Offer Ends In:
      </motion.h4>
      <div className="countdown-grid">
        <CountdownItem value={timeLeft.days} label="Days" />
        <CountdownItem value={timeLeft.hours} label="Hours" />
        <CountdownItem value={timeLeft.minutes} label="Minutes" />
        <CountdownItem value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
