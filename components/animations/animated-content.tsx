"use client";

import * as React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  // `li` permite animar ítems de listas (`ol`/`ul`) sin romper su semántica.
  as?: "div" | "li";
  container?: Element | string | null;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  scale?: number;
  threshold?: number;
  delay?: number;
}

export function AnimatedContent({
  children,
  as = "div",
  container,
  distance = 40,
  direction = "vertical",
  reverse = false,
  duration = 700,
  ease = "power3.out",
  initialOpacity = 0,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  className = "",
  ...props
}: AnimatedContentProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    let scrollerTarget: Element | string | null = container ?? null;
    if (typeof scrollerTarget === "string") {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;
    const getSeconds = (val: number) => (val > 10 ? val / 1000 : val);

    gsap.set(el, {
      [axis]: offset,
      scale,
      autoAlpha: initialOpacity,
      willChange: "opacity, transform",
    });

    const tl = gsap.timeline({ paused: true, delay: getSeconds(delay) });
    tl.to(el, {
      [axis]: 0,
      scale: 1,
      autoAlpha: 1,
      duration: getSeconds(duration),
      ease,
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => tl.play(),
    });

    return () => {
      st.kill();
      tl.kill();
      gsap.killTweensOf(el);
    };
  }, [container, distance, direction, reverse, duration, ease, initialOpacity, scale, threshold, delay]);

  const Tag = as;

  return (
    <Tag ref={ref as React.Ref<never>} className={className} {...props}>
      {children}
    </Tag>
  );
}
