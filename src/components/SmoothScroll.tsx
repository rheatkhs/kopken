"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";

function SmoothScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();

        if (href === "#") {
          lenis.scrollTo(0);
        } else {
          const element = document.getElementById(href.slice(1));
          if (element) {
            lenis.scrollTo(element, {
              offset: -74,
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll() {
  return (
    <ReactLenis root>
      <SmoothScrollHandler />
    </ReactLenis>
  );
}
