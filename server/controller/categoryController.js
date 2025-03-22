const categoryModel = require('../model/categoryModel')


exports.create = async(res,req)=>{


    const categoryName  = rea.body.name

    await categoryModel.create({
        Name:categoryName
    })





}