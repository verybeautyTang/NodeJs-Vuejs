module.exports = {
  outputDir: __dirname.path.join('.\\..\\server\\public'),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}
