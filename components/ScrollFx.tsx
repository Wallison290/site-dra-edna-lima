"use client";

import { useEffect } from "react";

export function ScrollFx() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    } else {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
      );
      revealEls.forEach((el) => revealObserver.observe(el));
    }

    if (reduceMotion) return;

    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    if (parallaxEls.length === 0) return;

    let ticking = false;

    const updateParallax = () => {
      const viewportH = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = Number(el.dataset.parallaxSpeed ?? 0.1);
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (center - viewportH / 2) * speed;
        const clamped = Math.max(-40, Math.min(40, offset));
        el.style.setProperty("--parallax-y", `${clamped.toFixed(2)}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
