import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { type PropsWithChildren, useRef } from "react";

import { cn } from "@/lib/utils";

export interface DockProps {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const Dock = React.forwardRef<HTMLUListElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      direction = "bottom",
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity);
    const mouseY = useRef(0);

    const renderChildren = () => {
      return React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
          mouseX: mouseX,
          magnification: magnification,
          distance: distance,
        });
      });
    };

    return (
      <motion.ul
        ref={ref}
        onMouseMove={(e) => {
          mouseX.set(e.pageX);
          mouseY.current = e.pageY;
        }}
        onMouseLeave={(e) => {
          if (mouseX.get() !== e.pageX || mouseY.current !== e.pageY) return mouseX.set(Infinity);

          const mouseEventHandler = (e: MouseEvent) => {
            // compare the current y value with the previous y value
            if (Math.abs(mouseY.current - e.pageY) > 20) {
              // if the difference is greater than 20 then set the mouseX value to infinity and remove the mousemove event listener
              mouseX.set(Infinity);
              document.removeEventListener("mousemove", mouseEventHandler);
            }
          };
          document.addEventListener("mousemove", mouseEventHandler);
        }}
        {...props}
        className={cn(
          "supports-backdrop-blur:bg-black/10 mx-auto flex h-[58px] w-max rounded-full border border-gray-dark bg-black/75 p-2 backdrop-blur-lg",
          {
            "items-start": direction === "top",
            "items-center": direction === "middle",
            "items-end": direction === "bottom",
          },
          className,
        )}
      >
        {renderChildren()}
      </motion.ul>
    );
  },
);

Dock.displayName = "Dock";

export interface DockIconProps
  extends Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label"> {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  props?: PropsWithChildren;
  href?: string;
  onClick?: () => void;
}

const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [48, magnification, 48]);

  let width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const getWidth = () => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    return { width: isMobile ? "48px" : width };
  };

  return (
    <li>
      <motion.a
        ref={ref}
        style={getWidth()}
        className={cn(
          "flex aspect-square cursor-pointer items-center justify-center rounded-full",
          className,
        )}
        {...props}
      >
        {children}
      </motion.a>
    </li>
  );
};

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon };
