import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passoword: {
        type: String,
        required: true,
    }
}, { timestamps: true });// timestamps is going to tell mongodb two important extra information
                        //1st - time of creation of user 
                        //2nd - time of the update  of the user  
const User = mongoose.model('User', userSchema);
            //name of model-User- should start with Uppercase 

export default User;
//to use this  model anywhere else in our application 