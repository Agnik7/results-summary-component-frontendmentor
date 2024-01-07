/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-light-red": "hsl(0, 100%, 67%)",
        "primary-orange-yellow": "hsl(39, 100%, 56%)",
        "primary-green-teal": "hsl(166, 100%, 37%)",
        "primary-cobalt-blue": "hsl(234, 85%, 45%)",
        "grad-slate-blue": "hsl(252, 100%, 67%)",
        "grad-royal-blue": "hsl(241, 81%, 54%)",
        "grad-violet-blue": "hsla(256, 72%, 46%, 1)",
        "grad-persian-blue": "hsla(241, 72%, 46%, 0)",
        "neutral-pale-blue": "hsl(221, 100%, 96%)",
        "neutral-light-lavender": "hsl(241, 100%, 89%)",
        "neutral-dark-gray-blue": "hsl(224, 30%, 27%)"
      },
      fontFamily:{
        "hanken": ["Hanken Grotesk", "sans-serif"]
      },
      boxShadow:{
        "bx": "1rem 1rem 5rem -25px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}

