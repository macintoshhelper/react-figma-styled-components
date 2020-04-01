const path = require('path');
const configure = require('react-figma-webpack-config');

module.exports = configure({
  resolve: {
    // extensions: ['.figma.tsx', '.figma.ts', '.figma.jsx', '.figma.js', '.tsx', '.ts', '.jsx', '.js'],
    // (there's an issue resolving .figma.js, so need to manually hardcode the extensions in node_modules for now)
    alias: {
      'react-primitives': '@elemental-design/react-primitives', // FIXME: Hack to not resolve index.js
      'react': path.resolve(__dirname, './node_modules/react/'),
      'react-figma': path.resolve(__dirname, './node_modules/react-figma/'),
    }
  }
});
