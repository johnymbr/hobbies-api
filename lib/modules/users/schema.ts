import * as mongoose from 'mongoose';
import { IUser } from './model';

const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String
    },
    hobbies : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hobbies'
    }]
});

export const User: mongoose.Model<IUser> = mongoose.model('users', schema);