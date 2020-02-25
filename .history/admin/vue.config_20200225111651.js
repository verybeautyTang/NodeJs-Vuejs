module.exports = {
  outputDir: __dirname.path.join('.\\..\\server\\admin'),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}
