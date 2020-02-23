module.exports = app => {
    const router =require('express').Router
    const mongoose =require('mongoose')
    const Aticle =mongoose.model('Aticle')
    router.get('news/init',async (req,res) =>{

    })

    app.use('web/api')
}