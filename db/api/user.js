import mongoose from '../mongo'
import { Schema } from 'mongoose';

var userSchema = new Schema({
    username: String,
    email: [String],
    password: String,
    created: {type:Date, default: Date.now},
    profile: Object
});

export default mongoose.model('users', userSchema);
