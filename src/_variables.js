/* Global CSS variables for use in CSS and JS */
const baseValue = 1
const unit = 'rem'
const baseFontSize = (baseValue * 1.6) + unit

module.exports = () => {
  return {
    // -- Sizing
    unit: '1rem',
    navHeight: '7.4rem',
    mobileNavHeight: '4.3rem',
    footerHeight: '67.9375rem',
    // -- Colors
    yellow: '#ffd734',
    red: '#e55934',
    red2: '#FD5750',
    red3: '#e14e47',
    red4: '#fff2ef',
    red5: '#cb0a02',
    blue: '#159BBA',
    blue2: '#147d9b',
    darkBlack: '#000000',
    lightGray: '#EAEAEA',
    light_red: 'rgba(253, 87, 80, 0.1)',
    light_white: 'rgba(255, 255, 255, 0.2)',
    gray1: '#aaa',
    gray2: '#202020',
    black: '#333333',
    black1: '#212121',
    black2: '#222222',
    black3: '#111111',
    black4: 'rgba(0, 0, 0, 0.15)',
    white: '#FDFDFD',
    red_serverless: '#fd5750',
    black_serverless: '#000000',
    grey1_serverless: '#5b5b5b',
    grey2_serverless: '#aaaaaa',
    grey3_serverless: '#eaeaea',
    grey4_serverless: '#f7f7f7',
    white_serverless: '#ffffff',
    // -- Fonts
    fontSize: baseFontSize,
    fontSizeTiny: formatFont(1.2),
    fontSizeSmall: formatFont(1.4),
    fontSizeNormal: baseFontSize,
    fontSizeBig: formatFont(1.8),
    fontSizeH1: formatFont(3.0),
    fontSizeH2: formatFont(2.15),
    fontSizeH3: formatFont(1.7),
    fontSizeH4: formatFont(1.25),
    fontSizeH5: baseFontSize,
    fontSizeH6: formatFont(0.85),
    fontWeightThin: 300,
    fontWeightNormal: 400,
    fontWeightSemiBold: 500,
    fontWeightBold: 700,
    // -- Indexes
    zIndexHighest: 300,
    zIndexHigher: 200,
    zIndexHigh: 100,
    zIndexNormal: 1,
    zIndexLow: -100,
    zIndexLower: -200,
    // -- Breakpoints
    breakpointXxs: '480px',
    breakpointXs: '600px',
    breakpointSmTablet: '720px',
    breakpointSm: '840px',
    breakpointMd: '960px',
    breakpointLgTablet: '1024px',
    breakpointLg: '1280px',
    breakpointXl: '1440px',
    breakpointXxl: '1600px',
    breakpointXxxl: '1920px',
    // -- Animation
    animationDuration: '.35s',
    animationDelay: '.07s', // $animation-duration / 5,
    animationCurveFastOutSlowIn: 'cubic-bezier(0.4, 0, 0.2, 1)',
    animationCurveLinearOutSlowIn: 'cubic-bezier(0, 0, 0.2, 1)',
    animationCurveFastOutLinearIn: 'cubic-bezier(0.4, 0, 1, 1)',
    animationCurveDefault: 'cubic-bezier(0.4, 0, 0.2, 1)',
  }
}

function formatFont(modifier) {
  return (modifier * baseValue) + unit
}


// $primary-color-dark-blue: #09a0c4;
