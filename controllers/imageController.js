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

const deleteImage = async (req, res) => {
    try{
        switch(req.params.id){
            case "62d9a2b991d1e3cf0a87fa51":
            case "62d9a30891d1e3cf0a87fa53":
            case "62d9a33191d1e3cf0a87fa55":
            case "62d9a34691d1e3cf0a87fa57":
            case "62d9a36591d1e3cf0a87fa59":
            case "62d9a38891d1e3cf0a87fa5b":
            case "62d9a3a791d1e3cf0a87fa5d":
            case "62d9a5249afd1998e409d929":
            case "62d9a6629afd1998e409d92e":
            case "62d9a6729afd1998e409d930":
            case "62d9a67d9afd1998e409d932":
            case "62d9a68f9afd1998e409d934":
            case "62d9a6ac9afd1998e409d936":
            case "62d9a6fd9afd1998e409d938":
            case "62d9a70b9afd1998e409d93a":
            case "62d9a7209afd1998e409d93c":
            case "62d9a72a9afd1998e409d93e":
            case "62d9a7429afd1998e409d940":
            case "62dbf07786a6631be26033b6":
            case "62dbf0e586a6631be26033ba":
            case "62dbfb2786a6631be26033c3":
            case "62dc1b4386a6631be26033f3":
            case "62dc25f086a6631be26033fb":
            case "62dc25f086a6631be26033fb":
                res.status(403).json({message: 'This item cannot be deleted'});
                break;
            default:
                const deletedImage = await Image.findByIdAndDelete(req.params.id)
                res.status(200).json({message: 'Image deleted successfully',
                data: deletedImage})
        }
    }catch(error) {
        res.status(500).json({message: error})
    }
}

module.exports = { getImages, setImages, deleteImage };
