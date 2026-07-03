"use client";

import { useEffect } from "react";

export function ClickRipple() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.appendChild(ripple);

      window.setTimeout(() => {
        ripple.remove();
      }, 700);
    };

    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
