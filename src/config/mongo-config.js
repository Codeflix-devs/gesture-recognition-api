const mongoDB = require("mongoose")
const logger = require("./logger-config")
const { mongoose } = require("./server-config")

const connectDB = () => {

    mongoDB.connect(mongoose.url, mongoose.options)
        .then(() => {
            logger.info("Connected to MongoDB")
        })
        .catch(() => {
            logger.error(`Failed to connection error: ${err}`)
            process.exit(1)
        })
}

module.exports = {
    connectDB
}