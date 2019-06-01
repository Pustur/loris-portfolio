const colors = {
  foregroundDark: '#8181ad',
  foreground: '#d4d4e8',
  foregroundLight: '#fff',
  background: '#1c1c2e',
  backgroundTransparent: 'rgba(28, 28, 46, 0)',
  accent: '#fb0ea0',
  accentDark: '#e2078e',
};

const fonts = {
  base:
    '"Europa", "Avenir", "-apple-system", "Helvetica Neue", "Arial", sans-serif',
  headings: '"Gilroy", sans-serif',
};

const sizes = {
  section: '10vw',
  header: {
    height: {
      smMin: '50px',
      mdMin: '70px',
    },
  },
};

const mediaQueries = {
  smMax: 'max-width: 767px',
  mdMin: 'min-width: 768px',
  mdMax: 'max-width: 1023px',
  lgMin: 'min-width: 1024px',
};

const zIndex = {
  header: 30,
  projectInfo: 20,
  projectOverlay: 10,
};

export { colors, fonts, sizes, mediaQueries, zIndex };
