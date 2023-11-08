import { useState, useEffect } from "react";


const useMediaQuery  = (query: string) => {
  const [isMatch, setIsMatch] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
 
    if (mediaQuery.matches !== isMatch) {
      setIsMatch(mediaQuery.matches);
    }

    window.addEventListener("resize", () => setIsMatch(mediaQuery.matches));
    return window.removeEventListener("resize", () =>
      setIsMatch(mediaQuery.matches)
    );
  }, [query, isMatch]);

  return isMatch;
};

export default useMediaQuery;
