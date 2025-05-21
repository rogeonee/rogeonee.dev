/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        md: "1050px",
        tall: { raw: "(min-height: 1000px)" },
        xs: "480px"
      },
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      poppins: ["var(--font-poppins)", "sans-serif"],
      sans: ["var(--font-inter)", "var(--font-poppins)", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "#FF8000",
        primary: "#F5F0E8",
        secondary: "#101010",
        gray: {
          dark: "#343233",
          light: "#5A5658",
          extralight: "#E0E0E0",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            lineHeight: '1.8',
            fontWeight: '300',
            color: theme('colors.zinc.400'),
            letterSpacing: theme('letterSpacing.wide'),
            a: {
              fontWeight: '400'
            },
            blockquote: {
              fontWeight: '400',
              quotes: 'none'
            },
            strong: {
              fontWeight: '400'
            },
            pre: {
              letterSpacing: '0'
            }
          }
        },
        sm: {
          css: {
            fontWeight: '400',
            fontSize: '0.95rem',
            strong: {
              fontWeight: '500'
            }
          }
        }
      }),
      borderWidth: {
        5: '5px',
        6: '6px'
      },
      transitionDuration: {
        400: '400ms',
        500: '500ms',
        600: '600ms',
        800: '800ms',
        900: '900ms'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size) 0'
          }
        },
        marquee: {
          from: {
            transform: 'translateX(0)'
          },
          to: {
            transform: 'translateX(calc(-100% - var(--gap)))'
          }
        },
        'marquee-vertical': {
          from: {
            transform: 'translateY(0)'
          },
          to: {
            transform: 'translateY(calc(-100% - var(--gap)))'
          }
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(6px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-6px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        gradient: 'gradient 8s linear infinite',
        marquee: 'marquee var(--duration) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
        hide: 'hide 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade:
          'slideDownAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 150ms cubic-bezier(0.16, 1, 0.3, 1)'
      }
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
