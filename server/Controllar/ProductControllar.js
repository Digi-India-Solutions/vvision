const product = require("../Model/ProductModel");
const fs = require("fs");
const { uploadImageCloudnary, deleteImageFromCloudnary } = require("../utils/Cloudnary");


const createRecord = async (req, res) => {
    try {
        // console.log(req.body)
        const { categoryname, details, productname, tableData } = req.body;
        if (!categoryname || !details || !productname || !tableData) {
            return res.status(403).json({
                success: false,
                mess: "Fill all required fields"
            });
        }
        const data = new product({
            categoryname,
            details,
            productname,
            tableData
        });

        if (req.files) {
            if (req.files.image1) {
                const url = await uploadImageCloudnary(req.files.image1[0].path);
                data.image1 = url;
            }
            if (req.files.image2) {
                const url = await uploadImageCloudnary(req.files.image2[0].path);
                data.image2 = url;
            }
            if (req.files.image3) {
                const url = await uploadImageCloudnary(req.files.image3[0].path);
                data.image3 = url;
            }
            if (req.files.image4) {
                const url = await uploadImageCloudnary(req.files.image4[0].path);
                data.image4 = url;
            }
        }
        await data.save();
        if (req.files) {
            req.files.image1 && fs.unlinkSync(req.files.image1[0].path);
            req.files.image2 && fs.unlinkSync(req.files.image2[0].path);
            req.files.image3 && fs.unlinkSync(req.files.image3[0].path);
            req.files.image4 && fs.unlinkSync(req.files.image4[0].path);
        }
        res.status(200).json({
            success: true,
            mess: "New Product created",
            data: data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        });
    }
};

const getproduct = async (req, res) => {
    try {
        const data = await product.find();
        if (!data.length) {
            return res.status(404).json({
                success: false,
                mess: "No records found"
            });
        }

        res.status(200).json({
            success: true,
            mess: "Records found",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        });
    }
};

const getSinglrproduct = async (req, res) => {
    try {
        const data = await product.findOne({ _id: req.params._id });
        if (!data) {
            return res.status(404).json({
                success: false,
                mess: "Record not found"
            });
        }

        res.status(200).json({
            success: true,
            mess: "Record found",
            data: data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        });
    }
};

const deleteRecord = async (req, res) => {
    try {
        const data = await product.findOne({ _id: req.params._id });
        if (data) {
            const images = ['image1', 'image2', 'image3', 'image4'];
            for (let img of images) {
                if (data[img]) {
                    const publicId = data[img].split('/').pop().split('.')[0];
                    try {
                        await deleteImageFromCloudnary(publicId)
                    } catch (error) {
                        console.error(`Failed to delete image ${img}:`, error);
                    }
                }
            }
            await data.deleteOne();
            res.status(200).json({
                success: true,
                mess: "Record deleted"
            });
        } else {
            res.status(404).json({
                success: false,
                mess: "Record not found"
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        let data = await product.findOne({ _id: req.params._id });
        if (data) {
            data.categoryname = req.body.categoryname ?? data.categoryname;
            data.productname = req.body.productname ?? data.productname;
            data.details = req.body.details ?? data.details;
            data.tableData = req.body.tableData ?? data.tableData;

            if (req.files) {
                const images = ['image1', 'image2', 'image3', 'image4'];

                for (let i = 0; i < images.length; i++) {
                    const imgField = images[i];
                    if (req.files[imgField]) {
                        const oldImage = data[imgField].split('/').pop().split('.')[0];
                        try {
                            await deleteImageFromCloudnary(oldImage);
                        } catch (error) {
                            console.error(`Failed to delete old image ${imgField}:`, error);
                        }
                        const newUrl = await uploadImageCloudnary(req.files[imgField][0].path);
                        data[imgField] = newUrl;
                    }
                }
            }
            await data.save();
            if (req.files) {
                req.files.image1 && fs.unlinkSync(req.files.image1[0].path);
                req.files.image2 && fs.unlinkSync(req.files.image2[0].path);
                req.files.image3 && fs.unlinkSync(req.files.image3[0].path);
                req.files.image4 && fs.unlinkSync(req.files.image4[0].path);
            }
            res.status(200).json({
                success: true,
                mess: "Record updated successfully",
                data: data
            });
        } else {
            res.status(404).json({
                success: false,
                mess: "Record not found"
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            mess: "Internal Server Error"
        });
    }
};

module.exports = {
    createRecord,
    getproduct,
    getSinglrproduct,
    deleteRecord,
    updateProduct
};
