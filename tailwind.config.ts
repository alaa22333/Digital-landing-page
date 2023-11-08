import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#08082D",
        primary2: "#F55353",
        secondary: "#F6F54D",
        grey100: "#F2F2F2",
        white: "#ECEDEE",
      },
      padding: {
        x: "30px",
        md: "70px",
      },
      fontSize: {
        h1: "40px",
        h2: "32px",
        h3: "24px",
        lg: "20px",
        sm: "16px",
        xs: "14px",
      },

      /*  backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, */
    },
  },
  plugins: [],
};
export default config
