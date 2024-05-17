const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");
console.log("CLOUD_API_KEY:", process.env.CLOUD_API_KEY); // Kiểm tra giá trị của CLOUD_API_KEY
dotenv.config();

cloudinary.config({
    cloud_name: 'dgfwiff6k',
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
});

cloudinary.uploader.upload('assets/images/1.jpg', { folder: 'test_images' })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });