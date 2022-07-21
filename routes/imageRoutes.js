const express = require('express');
const router = express.Router();
const {getImages, setImages} = require('../controllers/imageController')

router.get('/', getImages)
router.post('/', setImages);

module.exports = router;