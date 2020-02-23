module.exports = app => {
    const mongoose = require('mongoose')
    mongoose.set('useCreateIndex', true) 
    mongoose.connect('mongodb://127.0.0.1/node-vue-moba',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    require('require-all')(__dirname,'\\..\\models')
}
$$('.hero-nav >li').map((el,i)=>{return {
    name:el.innerText,
    heros:$$('li',$$('.hero-list')[i]).map(li => {
        return {
               name: $$('h3',li)[0].innerText,
               avatar:$$('img',li[0]).src
            }
        })
    }
}
)