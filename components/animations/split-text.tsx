"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
}

export function SplitText({
  text,
  className = "",
  delay = 30,
  duration = 0.9,
  ease = "power3.out",
  splitType = "words",
  from = { opacity: 0, y: 24 },
  to = { opacity: 1, y: 0 },
  tag = "p",
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(
    () => typeof document !== "undefined" && document.fonts.status === "loaded",
  );

  useEffect(() => {
    if (fontsLoaded) return;
    document.fonts.ready.then(() => setFontsLoaded(true));
  }, [fontsLoaded]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !text || !fontsLoaded) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        wordsClass: "split-word",
        charsClass: "split-char",
        onSplit: (self) => {
          const targets =
            splitType === "chars"
              ? self.chars
              : splitType === "lines"
                ? self.lines
                : self.words;
          return gsap.fromTo(targets, from, {
            ...to,
            duration,
            ease,
            stagger: delay / 1000,
          });
        },
      });

      return () => splitInstance.revert();
    },
    { dependencies: [text, fontsLoaded, splitType], scope: ref },
  );

  const Tag = tag;

  return (
    <Tag ref={ref as React.Ref<HTMLParagraphElement>} className={className}>
      {text}
    </Tag>
  );
}
