const express = require("express");

const app = express();

const port = 8000;

app.get("/login", (req,res)=>{
    return res.send("We are visiting a login route")
});

const admin = (req,res) => {
    return res.send("Admin dashboard");
};

const isloggedIn=(req,res,next)=>{
    console.log("isloggedIn is also running");
    next();
}

const isAdmin= (req,res,next) => {
    console.log("isAdmin is running");
    next();
}
app.get("/admin", isloggedIn,isAdmin ,admin);


app.get("/signup", (req,res)=>{
    return res.send("This is signup");
});

app.get("/Jai", (req,res)=>{
    return res.send("Jai uses instagram");
});

app.listen(port, ()=>{
    console.log("Server is running..");
});