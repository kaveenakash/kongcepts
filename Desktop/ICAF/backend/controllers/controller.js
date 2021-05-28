const Sample = require('../models/Sample')


const sampleGetMethod = (req,res) =>{

    Sample.find({},(err,data) =>{
        if(err){
            return res.status(400).json({
                error:`Error Occured`
            })
        }
        return res.status(200).json({
            data:data
        })
    })

}
const samplePostMethod = (req,res) =>{
    const {name,age} = req.body
    let newSample = new Sample({name,age})
    newSample.save((err,data) =>{
        if(err){
            return res.status(400).json({
                err
            })
        }
        return res.status(200).json({
            data:data
        })
    })
}


module.exports ={
    sampleGetMethod,
    samplePostMethod
}