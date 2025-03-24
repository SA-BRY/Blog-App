const blogModel = require('../model/blogModel')
const userModel = require('../model/userModel')


exports.create = async(req,res)=>{



    const title = req.body.title
    const body = req.body.body
    const date = new Date()
    const userId = req.body.userId
    const categoryId = req.body.categoryId


    if(!title || !body ){
        res.json({
            msg:"please enter all data",
            data:[],
            state:0
        })
        return
    }



    await blogModel.create({
        title:title,
        body:body,
        date:date,
        userId:userId,
        categoryId:categoryId
    }).then((data)=>{
        res.json({
            msg:'data created successfully',
            data:data,
            state:1
        })
    }).catch((err)=>{
        console.log(err)
        res.json({
            msg:'internal server error',
            data:[],
            state:0
        })
    })
}


exports.delete = async(req,res)=>{

    const id = req.params.id



    await blogModel.findByIdAndDelete(id).then(()=>{
        res.json({
            msg:'data deleted successfully',
            data:[],
            state:1
        })
    }).catch((err)=>{
        console.log(err)
        res.json({
            msg:'internal server error',
            data:[],
            state:0
        })
    })


}


exports.getBlogs = async (req,res)=>{


    const blogs = await blogModel.find()

    if(blogs){
        res.json({
            msg:"data founded successfully",
            data:blogs,
            state:1
        })
        return
    }else{
        res.json({
            msg:"there is no blogs",
            data:[],
            state:1
        })
    }


}