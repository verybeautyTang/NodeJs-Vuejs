const mongoose = require('mongoose')
const schema = mongoose.Schema({
    account:{type:String ,unique:true},
    
    password:{type:String,select:false, set(val){
        // 这里是在把密码进行分散处理，用到了bcrypt的一个插件，原理是利用hash插入数据
        // 保证了密码的不被破坏性，MD5
        //select:false,是为了不让密码被查询出来，不然会查出来分散后的数据
        return require('bcrypt').hashSync(val,12)
    }}
})
module.exports = mongoose.model('AdminUser',schema)