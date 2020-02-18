module.exports = options =>{
    const AdminUser = require('../models/AdminUser')
    const jwt = require('jsonwebtoken')
    const http_assert = require('http-assert')
   return  async(req,res,next)=>{
    // 在http里面拿到Token，pop()是拿到split分割后后面一个元素
   const token = String(req.headers.authorization || '').split(' ').pop()
   //token 为空
   http_assert(token,401,'请您先登录后重试')
   //jwt.verify：获取秘密或公共密钥的函数
   const { id } = jwt.verify (token,req.app.get('secret'))
   http_assert(id,401,'请您先登录后重试')
   // 在数据库里面根据id查到这个数据
   req.user = await AdminUser.findById(id)
   // 用户不存在的时候需要登录
   http_assert(req.user,401,'请您先登录后重试')
   console.log(req.user)
    await next()
    }
}