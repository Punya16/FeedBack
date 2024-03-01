const Feedback = require('../models/feedbackModel');

exports.createFeedback = async (req, res) => {
  try {
    const { rating } = req.body;
    let image = '';
    if (req.file) {
      image = req.file.path;
    }
    let textData = '';
    if (req.textData) {
      textData = req.textData;
    }
    const feedback = new Feedback({ rating, image, textData });
    const savedFeedback = await feedback.save();
    res.json(savedFeedback);
  } catch (error) {
    console.error('Error creating feedback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
