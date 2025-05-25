import { useState, useEffect } from "react";

type Breakpoint = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

const breakpoints: Record<Breakpoint, string> = {
  xxs: "320px",
  xs: "390px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1440px",
  "3xl": "1600px",
};

export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const query = `(min-width: ${breakpoints[breakpoint]})`;
    const media = window.matchMedia(query);

    setIsMatch(media.matches);

    const listener = (e: any) => setIsMatch(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [breakpoint]);

  return isMatch;
};
