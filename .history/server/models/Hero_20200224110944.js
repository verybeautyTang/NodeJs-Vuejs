const mongoose = require('mongoose')
const schema = mongoose.Schema({
    name:{type:String},
    avatar:{type:String},
    banner:{type:String},
    title:{type:String},
    // 分类
    categories:[{type:mongoose.SchemaTypes.ObjectId,ref:'Category'}],
    // 评分
    scores:{
        difficult:{type: Number},
        skills:{type: Number},
        attack:{type: Number},
        survive:{type: Number},
    },
    // 技能说明
    skills:[{
        icon:{type: String},
        title:{type: String},
        description:{type: String},
        tips:{type: String}
    }],
    // 顺风出装
    items1:[ { type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    // 逆风出装
    items2:[ { type:mongoose.SchemaTypes.ObjectId,ref:'Item'}],
    // 使用技巧
    usageTips:{type:String},
    battleTips:{type:String},
    teamTips:{type:String},
    // 最佳搭档
    partners:[{
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String},
    }],
    // 被谁克制
    enemy:[{
        hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
        description:{type:String},
       }]
})
module.exports = mongoose.model('Hero',schema,'heroes')