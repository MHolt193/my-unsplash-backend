const Image = require("../models/imageModel");

const getImages = async (req, res) => {
  const images = await Image.find();

  res.status(200).json(images);
};

const setImages = async (req, res) => {
  try{
    if (!req.body.label) {
    res.status(400).json(`Image label required your body: ${req.body.label}`);
  }
  if (!req.body.imageUrl) {
    res.status(400).json("Image url required");
  }
  const image = await Image.create({
    label: req.body.label,
    imageUrl: req.body.imageUrl,
  });
  res.status(200).json(image);}catch(e){console.error(e)}
};

module.exports = { getImages, setImages };
