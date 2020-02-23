module.exports = app => {
    const express = require('express')
    const AdminUser = require('../../models/AdminUser')
    const jwt = require('jsonwebtoken')
    const http_assert = require('http-assert')
    const router = express.Router({
        mergeParams: true
    })
    // 验证登录中间件
    const authLogin = require('./../../middelWare/login.js')
    // 资源中间件
    const authResource = require('./../../middelWare/resource.js')
    router.post('/',async(req,res) =>{
        const model = await req.Model.create(req.body)
         res.send(model)
    })
    router.put('/:id',async(req,res) =>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
         res.send(model)
    })
    // 获取所有资源列表
    router.get('/', async(req,res) =>{
        let querySelection ={}
        if( req.Model.modelName === 'Category') {
            querySelection.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(querySelection).limit(100)
        res.send(items)
    })
    router.get('/:id',async(req,res) =>{
        console.log(req.params)
        const model = await req.Model.findById(req.params.id)
         res.send(model)
    })
    router.delete('/:id',async(req,res) =>{
        await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success: true
        })
    })
    app.use('/admin/api/rest/:resource',authLogin(),authResource(),router)

    // 上传图片
    const multer = require('multer')
    const upload = multer({dest:__dirname +'\\..\\..\\uploads'})
    console.log(__dirname +'\\..\\..\\uploads')
    app.post('/admin/api/upload',authLogin(), upload.single('file'),async (req,res)=> {
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
    // 登录接口
    app.post('/admin/api/login',async (req,res) => {
        const {account, password} = req.body
        //1、根据用户名来找用户(这里要 把密码返回回来因为密码是加密查不到)
        const user = await AdminUser.findOne({account}).select('+password')
        http_assert(user,422,'用户不存在')
        //2、校验密码
        const pwd = require('bcrypt').compareSync(password, user.password)
        http_assert(pwd,422,'密码错误')
        //3、返回token
        const token = jwt.sign({id: user._id},app.get('secret'))
        res.send({token})
    } )
    // 错误处理函数
    app.use(async (err,req,res,next)=> {
        res.status(err.statusCode).send({
            message:err.message
        })
        await next()
    })
}