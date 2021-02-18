module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'light-accent': 'var(--light-accent)',
        'grad-color': 'var(--grad-color)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
      cursor: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
}
