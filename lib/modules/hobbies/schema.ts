import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
    experienceLevel: {
        type: String
    },
    name: {
        type: String
    },
    year: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }
});

export default mongoose.model('hobbies', schema);