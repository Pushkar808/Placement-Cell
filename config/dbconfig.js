const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/PlacementCell");
mongoose.connect("mongodb+srv://PlacementCell:njuWPM84eRRSJZKc@cluster0.xz5jpul.mongodb.net/?retryWrites=true&w=majority");
const DB=mongoose.connection;
DB.on('error',err=>{logError(err)});
DB.once('open',()=>{
    console.log("Connected to mongo succesfully");
})