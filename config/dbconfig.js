const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/PlacementCell");

mongoose.connect("mongodb+srv://pushkar:EWY4RKwBpB8txyqx@cluster0.1hfkic2.mongodb.net/?retryWrites=true&w=majority/test");
const DB=mongoose.connection;
DB.on('error',err=>{logError(err)});
DB.once('open',()=>{
    console.log("Connected to mongo succesfully");
})