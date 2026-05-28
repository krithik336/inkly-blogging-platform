const Blog = require("../models/Blog");

// Create Blog
exports.createBlog = async (req, res) => {

  try {

    const { title, content } = req.body;

    const blog = await Blog.create({

      title,
      content,
      author: req.user.id

    });

    res.status(201).json({

      message: "Blog created successfully",
      blog

    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// Get All Blogs
exports.getBlogs = async (req, res) => {

  try {

    const blogs = await Blog.find()
    .populate("author", "name email");

    res.status(200).json(blogs);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};