module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    container: {
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
