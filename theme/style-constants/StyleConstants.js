const sassImports = require('../exports.scss');

// All properties of sassImports are provided as strings, so in order to make them usable in TS, some will need parsing.

// For values that need no parsing
export function _plainImport(key) {
  return sassImports[key];
}

// For values that have quotes explicitly in SASS
export function _stringImport(key) {
  const val = sassImports[key];
  return JSON.parse(val);
}

// For values that are integers in SASS
export function _integerImport(key) {
  const val = sassImports[key];
  return parseInt(val, 10);
}

/* For values declared in SASS as a single glyph in unicode, like this
        $icon-activity: "\e900";
 */
export function _glyphImport(key) {
  const val = sassImports[key];

  const hexCode = val.slice(2, -1);
  const glyph = JSON.parse(`"\\u${hexCode}"`);

  return { hexCode, glyph };
}

/**
 * A collection of values exported by the CSS.
 *
 */
export const StyleConstants = {
  /** Text font properties (families and sizes) */
  font: {
    familyBase: _plainImport('font-family-base')
  },

  /** Icon properties (font families, sizes, and glyph codes) */
  icons: {},

  /** Generic and purposed colors */
  colors: {
    brand: {},
    data: {}

  },

  zIndex: {
    navbar: _integerImport('zindex-navbar')
  }
};
