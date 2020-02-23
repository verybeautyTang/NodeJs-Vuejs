module.exports = app => {
    const router =require('express').Router
    const mongoose =require('mongoose')
    const Article =mongoose.model('Article')
    const Category = mongoose.model('Category')
    router.get('news/init',async (req,res) =>{

    })

    app.use('web/api')
}