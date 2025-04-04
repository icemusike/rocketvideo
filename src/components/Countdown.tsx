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
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Set target date to April 5th at 10 AM EST
    const targetDate = new Date();
    targetDate.setMonth(3); // April (0-indexed)
    targetDate.setDate(5);
    targetDate.setHours(10, 0, 0, 0); // 10 AM
    
    // Convert EST to UTC (EST is UTC-5, or UTC-4 during daylight saving time)
    // Check if we're in daylight saving time
    const isDST = () => {
      const jan = new Date(targetDate.getFullYear(), 0, 1).getTimezoneOffset();
      const jul = new Date(targetDate.getFullYear(), 6, 1).getTimezoneOffset();
      return Math.max(jan, jul) !== targetDate.getTimezoneOffset();
    };
    
    // Adjust hours based on if we're in DST or not (EST is UTC-5, EDT is UTC-4)
    targetDate.setHours(targetDate.getHours() + (isDST() ? 4 : 5));
    
    // If target date is in the past, set it to next year
    if (targetDate < new Date()) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };
    
    // Calculate initial time left
    setTimeLeft(calculateTimeLeft());
    
    // Update time every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
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
