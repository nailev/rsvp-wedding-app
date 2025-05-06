import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-08-06T18:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center text-2xl gap-6 font-semibold text-pink-700">
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className="text-center">
          <div>{timeLeft[unit]}</div>
          <div className="text-sm text-gray-500">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
