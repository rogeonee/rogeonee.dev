/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  fontFamily: {
		inter: ['var(--font-inter)', 'sans-serif'],  // Assuming fallback to system sans-serif
		poppins: ['var(--font-poppins)', 'sans-serif'],  // Assuming fallback to system sans-serif
		'fira-code': ['var(--font-fira-code)', 'monospace'],  // Assuming fallback to system monospace
		sans: ['var(--font-inter)', 'var(--font-poppins)', 'sans-serif'],  // Multiple custom fonts with fallback
	  },
	  extend: {
		colors: {
		  accent: '#FF7B00',
		  primary: '#F5F0E8',
		  secondary: '#101010',
		  gray: {
			dark: '#343233',
			light: '#5A5658',
			extralight: '#E0E0E0',
		  },
		},
		screens: {
		  md: '1050px',
		  tall: { raw: '(min-height: 1000px)' },
		},
		typography: (theme) => ({
		  DEFAULT: {
			css: {
			  color: theme('colors.gray.dark'),
			  'h2, h3, h4': {
				'scroll-margin-top': '8rem', // Adjusted to a fixed value if using spacing is not defined
			  },
			},
		  },
		}),
	  },
	},
	plugins: [],  // No external plugins included
}
  