const tailwindcss = require('tailwindcss')

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js', './public/index.html'],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    tailwindcss('.tailwind.js'),
    require('autoprefixer'),
    ...(process.env.node_env === 'production' ? [purgecss] : [])
  ]
}
