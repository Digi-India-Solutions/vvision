const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    categoryname: {
        type: String,
        required: [true, "CategoryName is required"]
    },
    details: {
        type: String,
        required: [true, "Details are required"]
    },
    productname: {
        type: String,
        required: [true, "Product name is required"]
    },
    tableData: {
        type: String
    },
    image1: {
        type: String,
        required: [true, "Image 1 is required"]
    },
    image2: {
        type: String,
        required: [true, "Image 2 is required"]
    },
    image3: {
        type: String,
        required: [true, "Image 3 is required"]
    },
    image4: {
        type: String,
        required: [true, "Image 4 is required"]
    }
});

const product = mongoose.model("product", productSchema);

module.exports = product;
