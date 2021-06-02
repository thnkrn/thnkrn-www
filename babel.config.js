const presets = ['next/babel']
const plugins = ['react-optimized-image/plugin']

if (process.env.NODE_ENV === 'test') {
  plugins.push('@compiled/babel-plugin')
}

module.exports = { presets, plugins }
