const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:10
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:10
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    },
    hash_password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    contactNumber:{type:String},
    profilePicture:{type:Number}
}, {timestamps:true})

userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password,10)
})

userSchema.methods = {
    authenticate : function(password){
        return bcrypt.compareSync(password, this.hash_password)
    }
}

userSchema.virtual("fullName").get(function(){
    return `${this.firstName} ${this.lastName}`
})

const UserModel = new mongoose.model('UserModel', userSchema)

module.exports = UserModel