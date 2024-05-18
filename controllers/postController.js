const Post = require('../models/postModel');


const PostController = {
    getFeed: async (req, res) => {
        try {
            const [feed] = await Post.getFeed(req.user.id);
            res.json(feed);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching feed' });
        }
    },
    getPostDetails: async (req, res) => {
        const { postId } = req.params;
        try {
            const [post] = await Post.findById(postId);
            res.json(post[0]);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching post details' });
        }
    },
    createPost: async (req, res) => {
        const { content, media } = req.body;
        try {
            await Post.create({ userId: req.user.id, content, media });
            res.status(201).json({ message: 'Post created successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error creating post' });
        }
    },
    deletePost: async (req, res) => {
        const { postId } = req.params;
        try {
            await Post.delete(postId, req.user.id);
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting post' });
        }
    },
    getLikes: async (req, res) => {
        const postId = req.params.postId;
        try {
            const [likes] = await Post.getLikes(postId);
            res.json(likes);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching likes', error });
        }
    },
    getComments: async (req, res) => {
        const postId = req.params.postId;
        try {
            const [comments] = await Post.getComments(postId);
            res.json(comments);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching comments', error });
        }
    },
};

module.exports = PostController;
