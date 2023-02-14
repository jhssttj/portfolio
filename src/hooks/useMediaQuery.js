import { useState, useEffect} from "react";

const useMediaQuery = (q) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(q);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize",listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, q]);

  return matches;
}

export default useMediaQuery
