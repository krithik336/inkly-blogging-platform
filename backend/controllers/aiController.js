const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

exports.generateBlog = async (req, res) => {

  try {

    const { topic } = req.body;

    const response = await groq.chat.completions.create({

      messages: [
        {
          role: "user",
          content: `Write a detailed blog about ${topic}`
        }
      ],

      model: "llama-3.1-8b-instant"

    });

    res.status(200).json({
      success: true,
      blog: response.choices[0].message.content
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};