import { useRef } from "react";

const OFFSET = 32;
const NAV_BAR_HEIGHT = 58;

const useScrollHandler = (navRef: React.RefObject<HTMLDivElement | null>) => {
  const navBottom = useRef(OFFSET);
  const offset = useRef(OFFSET);
  const previousScrollY = useRef(0);

  const handleScroll = () => {
    if (!navRef.current) return;

    const currentScrollY = window.scrollY;
    const deltaScroll = currentScrollY - previousScrollY.current;

    // handle condition when the initial scroll position != 0
    if (deltaScroll > NAV_BAR_HEIGHT && previousScrollY.current === 0) {
      return (previousScrollY.current = currentScrollY);
    }

    // scroll down
    if (deltaScroll > 0) {
      navBottom.current = Math.max(
        navBottom.current - deltaScroll,
        -(navRef.current.clientHeight || NAV_BAR_HEIGHT),
      );
    } else {
      navBottom.current = Math.min(navBottom.current - deltaScroll, offset.current);
    }

    navRef.current.style.bottom = `${navBottom.current}px`;

    previousScrollY.current = currentScrollY;
  };

  const setInitialPosition = () => {
    if (!navRef.current) return;

    const computedStyle = getComputedStyle(navRef.current);
    const bottomNavBarOffset =
      Number(computedStyle.getPropertyValue("--bottom-nav-bar-offset").replace("px", "")) || OFFSET;
    navBottom.current = bottomNavBarOffset;
    offset.current = bottomNavBarOffset;
  };

  return { handleScroll, navRef, setInitialPosition };
};

export default useScrollHandler;
