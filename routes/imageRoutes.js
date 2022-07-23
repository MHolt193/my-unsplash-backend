const express = require('express');
const router = express.Router();
const {getImages, setImages, deleteImage} = require('../controllers/imageController')

router.get('/', getImages)
router.post('/', setImages);
router.delete('/:id', deleteImage);

module.exports = router;