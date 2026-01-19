"use client";

import { useEffect } from "react";

export default function ForceTopOnMount() {
  useEffect(() => {
    // stop browser from restoring scroll position
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // scroll the window
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // ALSO scroll your app's scroll container if you have one
    // (common when .container or main has overflow: auto)
    const containers = [
      document.querySelector(".container"),
      document.querySelector("main"),
      document.scrollingElement,
      document.documentElement,
      document.body,
    ].filter(Boolean) as Element[];

    for (const el of containers) {
      try {
        (el as any).scrollTop = 0;
      } catch {}
    }

    // run again after layout + iframe load jank
    const t1 = setTimeout(() => window.scrollTo(0, 0), 50);
    const t2 = setTimeout(() => window.scrollTo(0, 0), 250);
    const t3 = setTimeout(() => window.scrollTo(0, 0), 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return null;
}
