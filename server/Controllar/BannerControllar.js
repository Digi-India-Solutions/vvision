
const banner = require("../Model/BannerModel")
const fs = require("fs")
const { uploadImageCloudnary, deleteImageFromCloudnary } = require("../utils/Cloudnary")

const createBanner = async (req, res) => {
    try {
        console.log(req.file.path)
        if (!req.file || !req.file.path) {
            return res.status(401).json({
                success: false,
                mess: "File not chosen"
            })
        }
        else {
            const imgurl = await uploadImageCloudnary(req.file.path);
            const data = new banner({ image: imgurl })
            await data.save()
            try {
                fs.unlinkSync(req.file.path)
            } catch (error) { }
            res.status(200).json({
                success: true,
                mess: "BAnner created"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({

            success: false,
            mess: "Internal server error"
        })
    }
}

const getBanner = async (req, res) => {
    try {
        let data = await banner.find()
        if (data) {
            res.status(200).json({
                success: true,
                mess: "Banner found successfully",
                data: data
            })
        }
        else {
            res.status(200).json({
                success: true,
                mess: "Banner not found ",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({

            success: false,
            mess: "Internal server error"
        })
    }
}


const getSingleBanner = async (req, res) => {
    try {
        let data = await banner.findOne({ _id: req.params._id })
        if (data) {
            res.status(200).json({
                success: true,
                mess: "Banner found successfully",
                data: data
            })
        }
        else {
            res.status(200).json({
                success: true,
                mess: "Banner not found ",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({

            success: false,
            mess: "Internal server error"
        })
    }
}

const deleteBanner = async (req, res) => {
    try {
        let data = await banner.findOne({ _id: req.params._id })
        if (data) {
            if (data.image) {
                const oldImage = data.image.split("/").pop().split(".")[0]
                await deleteImageFromCloudnary(oldImage)
            }
            await data.deleteOne()
            res.status(200).json({
                success: true,
                mess: "Banner delete successfully",
            })
        }
        else {
            res.status(200).json({
                success: true,
                mess: "Banner not found ",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({

            success: false,
            mess: "Internal server error"
        })
    }
}

const updateBanner = async (req, res) => {
    try {
        let data = await banner.findOne({ _id: req.params._id })
        if (data) {
            if (req.file) {
                if (data.image) {
                    const oldImage = data.image.split("/").pop().split(".")[0]
                    await deleteImageFromCloudnary(oldImage)
                }
                const imgurl = await uploadImageCloudnary(req.file.path)
                data.image = imgurl
                await data.save()
                try {
                    fs.unlinkSync(req.file.path)
                } catch (error) { }
                res.status(200).json({
                    success: true,
                    mess: "Banner found successfully",
                    data: data
                })
            }
        }
        else {
            res.status(200).json({
                success: true,
                mess: "Banner not found ",
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            mess: "Internal server error"
        })
    }
}
module.exports = {
    createBanner: createBanner,
    getBanner: getBanner,
    getSingleBanner: getSingleBanner,
    deleteBanner: deleteBanner,
    updateBanner: updateBanner
}