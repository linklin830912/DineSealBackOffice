import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',

        fontMainColor: 'var(--fontMainColor)',
        fontSecondary0Color: 'var(--fontSecondary0Color)',
        fontSecondary1Color: 'var(--fontSecondary1Color)',
        fontMainPaceholderColor: 'var(--fontMainPaceholderColor)',
        hoverfontMainColor: 'var(--hoverfontMainColor)',
        fontSecondary0HoverColor: 'var(--fontSecondary0HoverColor)',
        fontSecondary1HoverColor: 'var(--fontSecondary1HoverColor)',

        mainBackground0Color: 'var(--mainBackground0Color)',
        mainBackground1Color: 'var(--mainBackground1Color)',
        subBackgroundColor: 'var(--subBackgroundColor)',        
        mainSvgPath0Color: 'var(--mainSvgPath0Color)',
        mainSvgPath1Color: 'var(--mainSvgPath1Color)',
        mainButton0Color: 'var(--mainButton0Color)',
        hoverMainButton0Color:'var(--hoverMainButton0Color)',
        mainButton1Color: 'var(--mainButton1Color)',
        hoverMainButton1Color:'var(--hoverMainButton1Color)',

        pageBackgroundColor: 'var(--pageBackgroundColor)',
        pageBackgroundSecondary0Color: 'var(--pageBackgroundSecondary0Color)',
        pageBackgroundSecondary1Color: 'var(--pageBackgroundSecondary1Color)',
        pageBackgroundMaskColor: 'var(--pageBackgroundMaskColor)',
        pageSvgPath0Color: 'var(--pageSvgPath0Color)',
        pageButton0Color: 'var(--pageButton0Color)',
      },
      fontSize: {
        'h1': '2.5rem',
        'h2': '1.875rem',
        'h3': '1.25rem',
        'h4': '0.8rem', 
        'h5': '0.72rem',
        'h6': '0.6rem',
        'hx1': '1.25rem',
        'hx2': '0.9375rem',
        'hx3': '0.625rem',
        'hx4': '0.4rem', 
        'hx5': '0.36rem',
        'hx6': '0.3rem',
      },
      fontFamily: {
        dmsans: ['DM Sans', 'sans-serif']
      }
    },
    screens: {
      xs: '480px',  
      sm: '640px', 
      md: '768px', 
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
} satisfies Config;
