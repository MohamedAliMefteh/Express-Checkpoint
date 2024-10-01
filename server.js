const express=require("express")
const app=express()
const authmiddleware=(req,res,next)=>{
    const date=new Date()
    const day=date.getDay()
    const hour=date.getHours()
    if (hour<=18 && hour >=9 && day>=1 && day<=5 ){
        next()
    }
    else {
        res.send("shop is closed ,The Shop will open in:"+(9-hour)+"hours")
    }
}
app.use(authmiddleware)
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/html/home.html")
})
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/html/contact.html")
})
app.get("/service",(req,res)=>{
    res.sendFile(__dirname+"/html/service.html")
})
app.get("/service.css",(req,res)=>{
    res.sendFile(__dirname+"/styles/service.css")
})
app.get("/home.css",(req,res)=>{
    res.sendFile(__dirname+"/styles/home.css")
})
app.get("/contact.css",(req,res)=>{
    res.sendFile(__dirname+"/styles/contact.css")
})



port=5000
app.listen(port,(err)=>err ? console.log(err) : console.log("my server is running on port : "+port))
