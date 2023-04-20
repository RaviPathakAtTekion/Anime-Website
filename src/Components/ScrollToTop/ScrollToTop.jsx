import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return null;
}

export default ScrollToTop;
