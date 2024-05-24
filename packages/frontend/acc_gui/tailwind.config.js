/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./src/**/*.{html,js, vue, ts, tsx, astro, md, mdx, svelte}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

