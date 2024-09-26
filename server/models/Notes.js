const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// we want that only  a user can see his/her notes only therefore we need to refrence the user with every notes.......
const NoteSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        deafult: Date.now()
    }
})



module.exports = mongoose.model('Note', NoteSchema); 