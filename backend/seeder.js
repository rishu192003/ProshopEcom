// //This file is completely separate from the rest of our application, we are not importing it anywhere, we are just runnuing it only on commandline like literally node seeder.js

import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors'; // helps to add colors to texts like green.inverse
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();


const importData =async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser};
    })
    
    await Product.insertMany(sampleProducts);

    console.log(`Data Imported!`.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1);
  }
}

const destroyData = async () =>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        
        console.log(`Data Destroyed!`.red.inverse)
        process.exit()

    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1);
    }
}

//now we want to run these two functions by our commandline so we will use -d argument , u can check this by clg(process.argv) 

if(process.argv[2] === '-d'){
    destroyData();
}else{
    importData();
}
// we add something to scripts to run these commands