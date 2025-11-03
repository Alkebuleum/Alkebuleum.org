/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0E4F6E",
          beige: "#E7D8C9",
          ink: "#0F172A",
        },
      },
      borderRadius: {
        xl: "14px",
        "2xl": "24px",
      },
      boxShadow: {
        card: "0 12px 30px rgba(15,118,110,0.12)",
        soft: "0 6px 18px rgba(2,6,23,0.08)"
      },
      backdropBlur: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};
