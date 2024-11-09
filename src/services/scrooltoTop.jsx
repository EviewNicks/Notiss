// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () =>
{
  const location = useLocation();

  useEffect(() =>
  {
    // Scroll ke atas setiap kali lokasi (rute) berubah
    window.scrollTo(0, 0);
  }, [location]);

  return null; // Tidak perlu merender apa-apa
};

export default ScrollToTop;
