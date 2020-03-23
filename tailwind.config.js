const colors = require('./src/colors/colors').colors;
const screens = require('./src/sizes/sizes').screens;

const sizes = {
  '0': '0px',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '32px',
  '9': '36px',
  '10': '40px',
  '11': '44px',
  '12': '48px',
  '13': '52px',
  '14': '56px',
  '15': '60px',
  '16': '64px',
  '17': '68px'
}

const fontSizes = {
  '0': '0px',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '14px',
  'base': '16px',
  'base-l': '18px',
  '5': '20px',
  '6': '24px',
  '7': '28px',
  '8': '32px',
  '9': '36px',
  '10': '40px',
  '11': '44px',
  '12': '48px',
  '13': '52px',
  '14': '56px',
  '15': '60px',
  '16': '64px'
}

module.exports = {
  theme: {
    screens: screens,
    colors: colors,
    container: {
      center: true
      // padding: '16px'
    },
    spacing: sizes,
    fontSize: fontSizes
  },
  variants: {},
  plugins: []
}

