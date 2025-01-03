"use client";
import { useState, useEffect } from "react";

export default function MouseGlow() {
  const [mousePos, setMousePos] = useState({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });

  useEffect(() => {
    setMousePos({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute w-[600px] h-[600px] blur-[150px] opacity-[0.07] dark:opacity-[0.03] bg-primary-heading dark:bg-dark-heading transition-opacity duration-300"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          transition: "transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1)",
        }}
      />
    </div>
  );
}
