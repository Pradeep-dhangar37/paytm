const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://pradeepdhangar37:1234@cluster0.4riso.mongodb.net/paytm-clone?retryWrites=true&w=majority&appName=Cluster0 ');
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
})
const User = mongoose.model("User", userSchema);
module.exports = {
    User,
}