/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    // ...
    // eslint-disable-next-line no-undef
    require("flowbite/plugin"),
  ],
  theme: {
    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      es: "0px",
    },
  },
};
