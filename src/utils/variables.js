const colors = {
  foregroundDark: '#5d5d82',
  foreground: '#d4d4e8',
  foregroundLight: '#fff',
  background: '#1c1c2e',
  backgroundTransparent: 'rgba(28, 28, 46, 0)',
  accent: '#fb0ea0',
};

const fonts = {
  base:
    '"Europa", "Avenir", "-apple-system", "Helvetica Neue", "Arial", sans-serif',
  headings: '"Streamster", "Blacksword", sans-serif',
};

const margins = {
  section: '10vw',
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

export { colors, fonts, margins, mediaQueries, zIndex };
