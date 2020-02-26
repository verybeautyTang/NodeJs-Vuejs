module.exports = {
  // eslint-disable-next-line no-path-concat
  outputDir: 'shuju',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}
