module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.set('useCreateIndex', true) 
    mongoose.connect('mongodb://127.0.0.1/node-vue-moba',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    
}