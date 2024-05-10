/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  fontFamily: {
		inter: ['var(--font-inter)', 'sans-serif'],
		poppins: ['var(--font-poppins)', 'sans-serif'],
		'fira-code': ['var(--font-fira-code)', 'monospace'],
		sans: ['var(--font-inter)', 'var(--font-poppins)', 'sans-serif'],
	  },
	  extend: {
		colors: {
		  accent: '#FF8000',
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
				'scroll-margin-top': '8rem',
			  },
			},
		  },
		}),
	  },
	},
	plugins: [],
}
  