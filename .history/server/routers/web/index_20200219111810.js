module.exports = app => {
    const router =require('express').Router()
    const mongoose =require('mongoose')
    const Article = require('../../models/Article')
    const Category = require('../../models/Category')
    // const parent = Category.find
    // .where({
    //     parent:parent
    // })
    router.get('/news/init',async (req,res) =>{
        const cats = await Category.find().lean()
        const randomCat = cats.slice(0).sort((a,b) => Math.random() - 0.5)
        const rowNews = ["体验服爆料丨穿上新盔甲，守护玄雍城！白起优化曝光", "情人节限定皮肤爆料丨喜鹊筑桥，嫦娥后羿月下相逢", "觉醒之战即将再度开启！鬼谷子全屏大，露娜无限连", "新皮肤爆料丨AI意识觉醒，机器少女妲己绚丽登场！", "王者荣耀祝各位召唤师春节快乐！", "2月18日全服不停机更新公告", "【已修复】关于部分召唤师点券充值未到账、点券到账延迟等问题说明", "2月18日体验服停机更新公告", "王者营地2月14日-15日登录异常说明公告", "2月15日体验服停机更新公告", "峡谷来相聚 初春有好礼", "创意互动营-云中君皮肤设计大赛投票开启", "爱在峡谷携手度 甜蜜好礼轻松得", "元宵福利到 峡谷好热闹！", "妲己新皮肤即将上架 全新好礼不容错过！", "2020年《王者荣耀》职业赛事（KPL与KPLGT）春季赛开赛调整公告", "中国电竞小伙逐梦记", "2019年赛事数据盘点，峡谷最强选手全知道！", "2020KPL春季赛大名单公示", "假期狂欢季开启，高校区域联赛战队携手虎牙人气主播开战啦！"]
        const newsList = rowNews.map(title =>{
            return {
                categories: randomCat.slice(0, 2),
                title: title
            }
        })
        res.send(newsList)
    })
 
    app.use('/web/api',router)
}