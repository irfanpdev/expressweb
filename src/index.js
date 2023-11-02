const path=require("path");
const express=require("express");
const app=express();
const hbs=require("hbs");
const Port=process.env.PORT || 3000;

const static_Path=path.join(__dirname,'../public');
const template_Path=path.join(__dirname,'../templates/views');
const partialPath=path.join(__dirname,"../templates/partials");
console.log(template_Path);

// setting static file path
app.use(express.static(static_Path));
// setting view enignes
app.set('view engine','hbs');

// setting templates and views
app.set('views',template_Path);
//registring partial path
hbs.registerPartials(partialPath);
// routing 
app.get('/',(req,res)=>{
    res.render("index");
});

app.get('/about',(req,res)=>{
    res.render("about");
});

app.get('/weather',(req,res)=>{
    res.render("weather");
});

app.get('*',(req,res)=>{
    res.render("404errorpage",{
        errmsg:'Opps! page not found'
    });
});

app.listen(Port,()=>{
console.log(`listening on port number ${Port}`)
});
