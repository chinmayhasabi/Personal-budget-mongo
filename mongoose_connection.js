const mongoose = require('mongoose');

const schema= require("./models/names_schema");

const url = 'mongodb://127.0.0.1:27017/mongodb_curd';

console.log("schema",schema)

async function run() {
  try {
    await mongoose.connect(url);
    console.log('Connected to the database');

  

    // const record = await schema.create({
    //   title: 'RENT',
    //   budget: 1500,
    //   color: '#ffffff'
    // });

    // console.log('Record inserted:', record);
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  } finally {
   // await mongoose.connection.close();
  }
}

run().catch(console.dir);
