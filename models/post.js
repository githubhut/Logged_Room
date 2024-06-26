const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

postSchema.index({ title: 1, userId: 1 }, { unique: true });


const Post = mongoose.model('Post', postSchema);

module.exports = Post;
