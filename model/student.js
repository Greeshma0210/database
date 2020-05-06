const mongoose= require('mongoose')

const studentSchema=new mongoose.Schema({
    studentName:{type:String},
    studID:{type:String},
    stud_Address:{type:Number},
    Course:{type:String},
    Grade:{type:String},
})

module.exports=mongoose.model('student',studentSchema)