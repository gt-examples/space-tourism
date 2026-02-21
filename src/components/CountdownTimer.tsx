"use client";

import { useEffect, useState } from "react";
import { T, Var, Num } from "gt-next";
import { useGT } from "gt-next/client";

interface CountdownTimerProps {
  targetDate: string;
  compact?: boolean;
}

export default function CountdownTimer({ targetDate, compact }: CountdownTimerProps) {
  const gt = useGT();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    function calc() {
      const diff = Math.max(0, new Date(targetDate).getTime() - Date.now());
      const days = Math.floor(diff / 86400000);
      const hours = Math.floor((diff % 86400000) / 3600000);
      const minutes = Math.floor((diff % 3600000) / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  if (!mounted) return <span className="text-neutral-500">--:--:--</span>;

  if (compact) {
    return (
      <T>
        <span className="font-mono text-space-cyan text-sm">
          <Var>{timeLeft.days}</Var>d <Var>{timeLeft.hours}</Var>h <Var>{timeLeft.minutes}</Var>m <Var>{timeLeft.seconds}</Var>s
        </span>
      </T>
    );
  }

  return (
    <div className="flex gap-4 justify-center">
      {[
        { value: timeLeft.days, label: gt("Days") },
        { value: timeLeft.hours, label: gt("Hours") },
        { value: timeLeft.minutes, label: gt("Minutes") },
        { value: timeLeft.seconds, label: gt("Seconds") },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="text-3xl sm:text-5xl font-bold text-space-cyan font-mono">
            <Num>{item.value}</Num>
          </span>
          <span className="text-xs sm:text-sm text-neutral-400 mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
