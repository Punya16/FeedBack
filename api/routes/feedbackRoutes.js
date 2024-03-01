const express = require('express');
const multer = require('multer');
const feedbackController = require('../controllers/feedbackController');

const router = express.Router();
const upload = multer({ dest: 'uploads/images/' });

router.post('/create', upload.single('image'), (req, res, next) => {
  const textData = req.body.textData || '';
  req.textData = textData;
  next();
}, feedbackController.createFeedback);

module.exports = router;
