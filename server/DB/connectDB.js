const mongoose = require("mongoose")

const getConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Databae is connect is successfully")
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getConnect
}