"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollTopOnNav() {
  const pathname = usePathname();

  useEffect(() => {
    // immediate
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    // after layout/iframe settles
    const t1 = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 50);

    const t2 = window.setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 350);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
