/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-fg': 'var(--accent-fg)',
        muted: 'var(--muted)',
        'muted-fg': 'var(--muted-fg)',
      },
      gridTemplateColumns: {
        'brutalist': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
    },
  },
  plugins: [],
}
