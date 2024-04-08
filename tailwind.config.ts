import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        body: "#FFFFFF",
      },
      colors: {
        // Header Background
        "header-bg": "#1F4082",

        // Main Background
        "main-bg": "#FFFFFF",

        // Text Color
        "text-white": "#FFFFFF",
        "text-blue": "#103463",
        "text-gray": "#343A40",

        // Accent Colors
        orange: "#EC9325",
        "light-blue": "#3E9DD4",

        // Call to Action/Button Color
        "cta-orange": "#DF4C25",

        // Border/Divider Color
        "border-gray": "#555555",

        // Footer Background
        "footer-bg": "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
