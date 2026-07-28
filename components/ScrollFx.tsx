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

    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );

    const rootEl = document.documentElement;
    let ticking = false;

    const updateScrollFx = () => {
      rootEl.classList.toggle("is-scrolled", window.scrollY > 24);

      if (!reduceMotion) {
        const viewportH = window.innerHeight;
        parallaxEls.forEach((el) => {
          const speed = Number(el.dataset.parallaxSpeed ?? 0.1);
          const rect = el.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const offset = (center - viewportH / 2) * speed;
          // Fill images (oversized backdrop inside a clipped section) derive their
          // safe travel distance from actual rendered sizes so they never reveal a
          // gap at any viewport height, instead of relying on a fixed px clamp.
          const maxRange = el.hasAttribute("data-parallax-fill")
            ? Math.max(
                0,
                (el.offsetHeight - (el.parentElement?.offsetHeight ?? el.offsetHeight)) / 2,
              )
            : 40;
          const clamped = Math.max(-maxRange, Math.min(maxRange, offset));
          el.style.setProperty("--parallax-y", `${clamped.toFixed(2)}px`);
        });
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollFx);
        ticking = true;
      }
    };

    updateScrollFx();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
