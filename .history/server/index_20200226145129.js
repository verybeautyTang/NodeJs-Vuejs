const express = require('express')
const app =express()

app.use(require('cors')())
app.set('secret','hsyiswyxmt666')
app.use(express.json())

app.use('/',express.static('web'))

app.use('/dist1',express.static('dist1'))

app.use('/uploads',express.static(__dirname +'\\uploads'))

require('./routers/admin/index.js')(app)

require('./plugins/db.js')(app)

require('./routers/web/index.js')(app)

app.listen(3000, () => {
    console.log('http://localhost:3000')
});