module.exports = {
  // eslint-disable-next-line no-path-concat
  outputDir: './../server/admin',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}
