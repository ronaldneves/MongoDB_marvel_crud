import mongoose from 'mongoose';

const personagensSchema = new mongoose.Schema({
    id: {type: mongoose.SchemaTypes.ObjectId},
    realName: {type: String},
    nickname: {type: String, required: true},
    age: {type: Number},
    description: {type: String, required: true}
},
{
    versionKey: false
});

const personagens = mongoose.model('personagens', personagensSchema);

export default personagens;