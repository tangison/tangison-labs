"use client";

import React, { useState, useEffect, useRef, useSyncExternalStore } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

function subscribeToReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function TypeWriter({
  text,
  speed = 50,
  className = "",
  delay = 0,
}: TypeWriterProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  // When reduced motion is preferred, display the full text immediately
  const displayedText = prefersReducedMotion ? text : undefined;
  const isComplete = prefersReducedMotion ? true : undefined;

  // Typing animation state — only used when motion is not reduced
  const [typedText, setTypedText] = useState("");
  const [typedComplete, setTypedComplete] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    if (hasStarted.current) return;
    hasStarted.current = true;

    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      const typeNext = () => {
        if (currentIndex <= text.length) {
          setTypedText(text.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(typeNext, speed);
        } else {
          setTypedComplete(true);
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

  const finalText = displayedText ?? typedText;
  const finalComplete = isComplete ?? typedComplete;

  return (
    <span className={className}>
      {finalText}
      {!finalComplete && !prefersReducedMotion && (
        <span className="typing-cursor" aria-hidden="true" />
      )}
      {finalComplete && !prefersReducedMotion && (
        <span className="typing-cursor typing-cursor-done" aria-hidden="true" />
      )}
    </span>
  );
}
