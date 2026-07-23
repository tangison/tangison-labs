/* Hallmark · pre-emit critique: P4 H4 E4 S4 R5 V5 */
"use client";

import React, { useState, useEffect, useRef } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

export function TypeWriter({
  text,
  speed = 50,
  className = "",
  delay = 0,
}: TypeWriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    if (hasStarted.current) return;
    hasStarted.current = true;

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      const typeNext = () => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(typeNext, speed);
        } else {
          setIsComplete(true);
        }
      };

      if (delay > 0) {
        timeoutId = setTimeout(typeNext, delay);
      } else {
        typeNext();
      }
    };

    startTyping();

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, prefersReducedMotion]);

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && !prefersReducedMotion && (
        <span className="typing-cursor" aria-hidden="true" />
      )}
      {isComplete && !prefersReducedMotion && (
        <span className="typing-cursor typing-cursor-done" aria-hidden="true" />
      )}
    </span>
  );
}
