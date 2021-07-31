require('dotenv').config({path: "./config.env"});
const fs = require('fs');
const Post = require("../models/Post");
const connectDB = require("../config/db");

connectDB();

const posts =   JSON.parse(fs.readFileSync(`${__dirname}/posts.json`,'utf-8'));

//run this line to import data
// node  utils/importData.js --import
// node utils/deleteData.js  --de

const importData = async () => {
    try {
        await Post.create(posts);
        console.log('Data Successfully imported');
        process.exit(1);
    } catch (error) {
        console.log(`Error : ${error}`);
        process.exit(1);
        
    }
}

const deleteData = async () => {
    try {
        await Post.deleteMany({});
        console.log("Data successfully deleted");
        process.exit(1);
    } catch (error) {
        console.log(`ERROR : ${error}`);       
    }
}

if (process.argv[2] === "--import"){
    importData();
} else if( process.argv[2] === "--delete"){
    deleteData();
}