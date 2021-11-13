module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
      serif: ['Spartan', 'serif'],
    },
    extend: {
      width: {
        '540': '540px',
        switcher: '79px',
        'switcher-ball' : '16px',
      },
      height: {
        switcher: '24px',
        'switcher-ball': '16px',
      },
      maxWidth: {
        '540': '540px', 
      },
      minWidth: {
        '375': '375px',
      },
      textColor: {
        skin: {
          numpad: 'var(--color-text-numpad)',
          command: 'var(--color-text-command)',
          base: 'var(--color-text-base)',
          eq: 'var(--color-text-eq)', 
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          display: 'var(--color-display)',
          body: 'var(--color-body)',
          numpad: 'var(--color-button-numpad)',
          command: 'var(--color-button-command)',
          accent: 'var(--color-accent)',
          'hover-accent': 'var(--color-accent-hover)',
          'hover-numpad': 'var(--color-button-numpad-hover)',
          'hover-command': 'var(--color-button-command-hover)',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
