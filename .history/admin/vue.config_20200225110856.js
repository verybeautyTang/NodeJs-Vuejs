module.exports = {
  outputDir: __dirname+'.\\..\\server\\public'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/'
}
