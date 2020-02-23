module.exports = app => {
    const router =require('express').Router
    const mongoose =require('mongoose')
    const Article =mongoose.model('Article')
    const Category = mongoose.model('Category')
    const parent = Category.find
    router.get('news/init',async (req,res) =>{
        const cats = await Category.find().where({
            parent:parent
        }).lean()
        
    })

    app.use('web/api')
}