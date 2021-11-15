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
        btn : '101px',
        'btn-cmd' : '227px', 
      },
      height: {
        switcher: '24px',
        'switcher-ball': '16px',
        'btn-top': '64px',
        'btn-bot': '59px',
        display : '128px',
      },
      maxWidth: {
        '540': '540px', 
      },
      minWidth: {
        '375': '375px',
      },
      fontSize: {
          title: ['32px', {letterSpacing: '-0.53px'}],
          display: ['48px', {letterSpacing: '-0.8px'}],
          numpad: ['32px', {letterSpacing: '-0.53'}],
          command: ['20px', {letterSpacing: '-0.33'}],
          theme: ['12px', {letterSpacing: '1px'}],

      },
      textColor: {
        skin: {
          numpad: 'var(--color-text-numpad)',
          command: 'var(--color-text-command)',
          base: 'var(--color-text-base)',
          eq: 'var(--color-text-eq)',
          accent: 'var(--color-accent)', 
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
          'numpad-shadow' : 'var(--color-button-numpad-shadow)',
          'command-shadow': 'var(--color-button-command-shadow)',
          'accent-shadow': 'var(--color-accent-shadow)',
        }
      }
    },
  },
  variants: {
    extend: {
      cursor: ['hover', 'focus'],
    },
  },
  plugins: [],
}
