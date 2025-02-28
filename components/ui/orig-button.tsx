'use client';

import { type VariantProps, cva } from 'class-variance-authority';
import { type HTMLMotionProps, m as motion } from 'motion/react';

const button = cva(['border-2 text-base font-inter font-medium outline-none'], {
  variants: {
    intent: {
      primary:
        'bg-black border-2 border-gray-light hover:border-accent focus:border-accent focus:bg-accent text-primary',
      secondary:
        'border-2 border-gray-light text-secondary hover:border-accent focus:border-accent',
      'secondary-light':
        'border-2 border-gray-light text-primary hover:border-accent focus:border-accent',
      error:
        'border-2 border-red-600 text-red-400 hover:border-red-700 focus:border-red-700',
      success:
        'border-2 border-green-600 text-green-400 hover:border-green-600 focus:border-green-600',
    },
    size: {
      default: 'px-4 py-1.5 rounded-2xl',
      square: 'w-10 h-10 grid place-items-center rounded-full',
    },
    extras: {
      icon: 'flex items-center gap-2',
      loading: 'relative flex items-center justify-center bg- text-transparent',
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'default',
  },
});

type ButtonProps = HTMLMotionProps<'button'> & VariantProps<typeof button>;

export function Button(props: ButtonProps) {
  return (
    <motion.button
      {...props}
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{ scale: 0.92 }}
      className={button({
        className: props.className,
        intent: props.intent,
        extras: props.extras,
        size: props.size,
      })}
    >
      {/* framer motion requires 1 ReactNode */}
      <>
        {props.children}
        {props.extras === 'loading' ? (
          <span className="absolute">
            <svg
              aria-hidden="true"
              className="w-6 h-6 mr-2 text-gray-light animate-spin fill-accent"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </span>
        ) : null}
      </>
    </motion.button>
  );
}
