"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypewriterProps = {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function Typewriter({
  words,
  className,
  typingSpeed = 95,
  deletingSpeed = 55,
  pauseDuration = 1600,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[wordIndex % words.length] ?? "";

  useEffect(() => {
    const wordComplete = !isDeleting && displayText === currentWord;
    const wordDeleted = isDeleting && displayText.length === 0;

    const timeout = window.setTimeout(() => {
      if (wordComplete) {
        setIsDeleting(true);
        return;
      }

      if (wordDeleted) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      const nextLength = displayText.length + (isDeleting ? -1 : 1);
      setDisplayText(currentWord.slice(0, nextLength));
    }, wordComplete ? pauseDuration : isDeleting ? deletingSpeed : typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [
    currentWord,
    deletingSpeed,
    displayText,
    isDeleting,
    pauseDuration,
    typingSpeed,
    words.length,
  ]);

  return (
    <p
      className={cn(
        "min-h-[2rem] font-display text-lg text-white/80 sm:text-2xl",
        className,
      )}
      aria-live="polite"
    >
      {displayText}
      <span className="typewriter-cursor" aria-hidden="true" />
    </p>
  );
}

