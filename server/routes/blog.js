const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// Seed data (run once if needed)
router.post('/seed', async (req, res) => {  // <-- changed '/seeds' to '/seed'
  const posts = [
    {
      title: 'Introducing Our New MERN Stack Blog',
      content: 'Welcome to our new blog built with the MERN stack. Here, we will share insights on modern web development, best practices, and industry trends.'
    },
    {
      title: 'Why Choose MongoDB for Scalable Applications',
      content: 'MongoDB offers flexibility and scalability for modern apps. In this post, we explore its benefits, schema design, and real-world use cases.'
    },
    {
      title: 'Building Robust APIs with Express and Node.js',
      content: 'Learn how to build fast, reliable RESTful APIs using Express and Node.js, with examples of middleware, routing, and error handling.'
    },
  ];
  
  await BlogPost.insertMany(posts);
  res.json({ message: 'Seeded blog posts with professional content' });
});

// Get all blog posts
router.get('/', async (req, res) => {
  const posts = await BlogPost.find().sort({ createdAt: -1 });
  res.json(posts);
});



// Create a new post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new BlogPost({ title, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create post' });
  }
});

// Update a post by ID
router.put('/:id', async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedPost) return res.status(404).json({ error: 'Post not found' });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update post' });
  }
});

// Delete a post by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete post' });
  }
});

module.exports = router;
