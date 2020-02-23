const express = require('express')
const app =express()

app.use(require('cors')())
app.set('secret','hsyiswyxmt666')
app.use(express.json())
app.use('/uploads',express.static(__dirname +'\\uploads'))

require('./routers/admin')(app)
require('./plugins/db')(app)
require('./routers/web')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
});