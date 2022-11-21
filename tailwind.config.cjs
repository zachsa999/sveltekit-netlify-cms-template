/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,mdx,md}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
