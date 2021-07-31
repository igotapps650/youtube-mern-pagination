const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("Mongoose connection success");
    } catch (error) {
        console.log("MongoDB connection failed");
        process.exit(1);
    }
};

module.exports = connectDB;