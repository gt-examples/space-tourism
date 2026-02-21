"use client";

import { useEffect, useRef } from "react";

function generateStars(count: number): string {
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(Math.random() * 2000);
    const y = Math.floor(Math.random() * 4000);
    shadows.push(`${x}px ${y}px #fff`);
  }
  return shadows.join(", ");
}

const small = generateStars(300);
const medium = generateStars(150);
const large = generateStars(50);

export default function StarField() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute w-[1px] h-[1px] star-layer-slow"
        style={{ boxShadow: small, top: 0, left: 0 }}
      />
      <div
        className="absolute w-[2px] h-[2px] star-layer-medium"
        style={{ boxShadow: medium, top: 0, left: 0 }}
      />
      <div
        className="absolute w-[3px] h-[3px] star-layer-fast"
        style={{ boxShadow: large, top: 0, left: 0 }}
      />
    </div>
  );
}
