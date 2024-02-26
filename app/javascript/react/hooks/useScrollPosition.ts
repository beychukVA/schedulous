import { useState, useLayoutEffect } from "react";

export default function useScrollPosition(id) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function onScroll(scrollable) {
    setPosition({ y: scrollable.scrollTop, x: scrollable.scrollLeft });
  }

  useLayoutEffect(() => {
    const scrollable = document.getElementById(id);
    if (!scrollable) return;

    scrollable.addEventListener("scroll", () => onScroll(scrollable));
    return () => {
      scrollable.removeEventListener("scroll", () => onScroll(scrollable));
    };
  }, []);

  return position;
}
