import React, { useRef } from "react";

export const useTooltipHandler = (navRef: React.RefObject<HTMLDivElement | null>) => {
  const tipX = useRef(0);
  const tipY = useRef(0);
  const bounds = useRef<DOMRect>(null);

  const setTipXY = () => {
    document.documentElement.style.setProperty("--tip-x", tipX.current.toString());
    document.documentElement.style.setProperty("--tip-y", tipY.current.toString());
  };

  const track = ({ x, y }: { x: number; y: number }) => {
    if (!bounds.current) return;

    tipX.current = x - bounds.current.left;
    tipY.current = y - bounds.current.top;

    setTipXY();
  };

  const setupTooltip = () => {
    const nav = navRef?.current;
    if (!nav) return;

    const navSize = nav.getBoundingClientRect().width;
    nav.style.opacity = "1";
    nav.style.setProperty("--width", navSize.toString());

    const teardown = () => {
      nav.removeEventListener("pointermove", track);
      nav.removeEventListener("pointerleave", teardown);
    };

    const initPointerTrack = () => {
      bounds.current = nav.getBoundingClientRect();
      nav.addEventListener("pointermove", track);
      nav.addEventListener("pointerleave", teardown);
    };

    nav.addEventListener("pointerenter", initPointerTrack);
  };

  return { setupTooltip };
};
