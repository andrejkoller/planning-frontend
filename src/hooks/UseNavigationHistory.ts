import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const useNavigationHistory = () => {
  const [historyStack, setHistoryStack] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const pathname = usePathname();
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    if (historyStack.length === 0) {
      setHistoryStack([pathname]);
      setCurrentIndex(0);
      return;
    }

    if (!isNavigatingRef.current) {
      setHistoryStack((prev) => [...prev.slice(0, currentIndex + 1), pathname]);
      setCurrentIndex((prev) => prev + 1);
    }

    isNavigatingRef.current = false;
  }, [pathname]);

  const goBack = () => {
    if (currentIndex > 0) {
      isNavigatingRef.current = true;
      setCurrentIndex((prev) => prev - 1);
      window.history.back();
    }
  };

  const goForward = () => {
    if (currentIndex < historyStack.length - 1) {
      isNavigatingRef.current = true;
      setCurrentIndex((prev) => prev + 1);
      window.history.forward();
    }
  };

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < historyStack.length - 1;

  return {
    canGoBack,
    canGoForward,
    goBack,
    goForward,
    historyStack,
    currentIndex,
  };
};
