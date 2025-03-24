const categoryModel = require('../model/categoryModel')


exports.create = async(req,res)=>{

    const categoryname  = req.body.categoryname


    if(!categoryname){
        res.json({
            msg:'Enter category name',
            data:[],
            state:1
        })
        return
    }

    const category = await categoryModel.findOne({
        categoryname:categoryname
    })

    if (category){
        res.json({
            msg:'category is already exist',
            data:[],
            state:0
        })
        return
    }

    await categoryModel.create({
        categoryname:categoryname
    }).then((data)=>{
        res.json({
            msg:'category saved successfully',
            data:data,
            state:1
        })
    }).catch((err)=>{
        console.log(err)
        res.json({
            msg:'intenal server error',
            data:[],
            state:0
        })
    })

}

exports.getCategory = async (req,res)=>{
try {
    
    const categorys = await categoryModel.find()

    if(categorys){
        res.json({
            msg:'categorys found successfully',
            data:categorys,
            state : 1
        })
        return
    }
    console.log(categorys)

    res.json({
        msg:'there is no categorys',
        data:[],
        state : 0
    })

} catch (error) {
    console.log(error)
}


}