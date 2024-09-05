const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadImageCloudnary = async (file) => {
    try {
        const uploadimage = await cloudinary.uploader.upload(file)
        return uploadimage.secure_url
    } catch (error) {
        console.log(error)
    }
}

const deleteImageFromCloudnary = async (file) => {
    try {
        await cloudinary.uploader.destroy(file)
        console.log("Image delete successfully")
    } catch (error) {
        console.log(error)
    }
}

// console.log(cloudinary.config())
module.exports = {
    uploadImageCloudnary, deleteImageFromCloudnary
}