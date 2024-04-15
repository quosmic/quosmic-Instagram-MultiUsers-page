const express = require("express");
const app= express();
const path= require("path");

const port =8080;

app.use(express.static(path.join(__dirname,"/public/js")));//to access from outside path
app.use(express.static(path.join(__dirname,"/public/css")));
app.set("view engine", "ejs"); 
app.set("views", path.join(__dirname,"/views"));

// app.get("/", (req,res)=>{
//     res.render("home");
// });
app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const instaData= require("./data.json");// require is parsing the JSON data into javascript object
    const data= instaData[username];
    if(data){
    res.render("instagram.ejs", {data});
    }
    else{
        res.render("error.ejs");
    }
     

});
// app.get("/HOME", (req,res)=>{
//     res.send("Hello");
// });
// app.get("/rolldice", (req,res)=>{
//     let diceval= Math.floor(Math.random()*6)+1;

//     res.render("rolldice",{num:diceval});    
   
// });


app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});