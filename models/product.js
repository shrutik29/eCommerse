const express = require('express');
const mongoose = require("mongoose");
const { connectToDatabase } = require("../connect")
const { product } = require('./productarr1')



const getProducts = async () => {
    try {
        // Connect to the database
        await connectToDatabase();

        // Directly access the "shrutik" collection and retrieve data
        // const shrutikCollection = mongoose.connection.collection('product');
        // const shrutikData = await pratikCollection.find({}).toArray();
        //         fetch('https://dummyjson.com/products')
        // .then(res => {
        //     const shrutData = res.json();
        // })
;

        // const shrutikData = product;
        const shrutikData =  product;

        return shrutikData;
    } catch (error) {
        console.error('Error retrieving products:', error);
        return null;
    } finally {
        // Close the Mongoose connection
        // mongoose.connection.close();
        console.log('Connection closed');
    }
};


const getCategoryProducts = async (category) => {
    try{

        await connectToDatabase();
        const shrutikCollection = mongoose.connection.collection('product');
        const categoryProducts = await shrutikCollection.find({category}).toArray();
        //console.log(categoryProducts);
        console.log("hii");
        
        return categoryProducts;


    } catch (error) {
        console.error('Error retrieving products:', error);
        return null;
    } finally {
        // Close the Mongoose connection
        mongoose.connection.close();
        console.log('Connection closed');
    }
};



module.exports = {
    getProducts,
    getCategoryProducts
};