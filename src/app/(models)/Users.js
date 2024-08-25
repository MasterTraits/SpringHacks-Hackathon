import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const usersSchema = new Schema({ 
    id: Number,
    name: String,
    email: String,
    password: String,
    bio: String,
    profilePicture: String,
    followers: Number,
    following: Number,
    students: Number,
}, {
    timestamps: true
}
);

const Users = mongoose.model('Users', usersSchema);
export default Users;