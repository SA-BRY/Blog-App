const userModel = require('../model/userModel')
const { use } = require('../router/router')


exports.signUp = async (req,res)=>{
try {
    
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email
    const phone = req.body.phone


    if(!username||!password||!email||!phone){
        
        res.json({
            msg:"please enter all data",
            data:[],
            state:0
        })
        return
    }

    const user = await userModel.findOne({
        username:username
    })

    if(user){
        res.json({
            msg:"username or email is already used",
            data:[],
            state:0
        })
        return
    }

        const newUser = await userModel.create({
            username,
            password,
            email,
            phone
        })

        await newUser.save()




} catch (error) {
    console.log(error)
}

}





exports.logIn = async (req,res)=>{

try {
    const username = req.body.username
    const password = req.body.password




    const user = await userModel.findOne({
        username:username
    })

    if (!user){
        res.json({
            msg:"user is not found",
            data:[],
            state:0
        })
        return
    }


    if(password === user.password){
        res.json({
            msg:"authentication done succesfully",
            data:user,
            state:1
        })
        console.log(user)
        return
    }else{
        res.json({
            msg:"password is incorrect",
            data:[],
            state:0
        })
    }
    

} catch (error) {
    console.log(error)
}
}





exports.getUser = async (req,res) =>{

    const id = req.params.id
    
    const user = await userModel.findOne({
        _id:id
    })

    if(user){
        res.json({
            msg:'',
            data:user.username,
            state:1
        })
        return
    }
    res.json({
        msg:'there is no user',
        data:[],
        state:1
    })

}