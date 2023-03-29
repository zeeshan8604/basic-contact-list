const express=require('express');
const path=require('path');
const port=8000;




const app=express();
app.use(express.urlencoded());
app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));  
var contactlist=[
    {
        name:'Zeeshan Ahmed',
        phone:'8604435248'
    },
    {
        name:'yasfeen sidd',
        phone:'7264009480'
    },
    {
        name:'Ammi',
        phone:'8858565969'
    }
]


app.get('/', function(req, res){
    // res.send('<h1>  Hey Zeeshan Ahmed,  server is running!</h1>');
    // console.log(__dirname);
     return res.render('home',{
        title:"My Contact List",
        contact_list:contactlist
    });
});
// app.get('/practice',function(req, res){
//     return res.render('practice', {
//         title:"practices"
//     });
// })

app.post('/creat-contact', function(req, res){
    contactlist.push({
        name:req.body.name,
        phone:req.body.phone

    });
   return res.redirect('/');
});
app.get('/delete-contact/', function(req, res){
    // console.log(req.query);
    let phone=req.query.phone;
    let conntactIndex=contactlist.findIndex(contact =>contact.phone==phone);
    if(conntactIndex != -1){
        contactlist.splice(conntactIndex, 1);
    }
    res.redirect('back');
})



app.listen(port, function(err){
    if(err){
        console.log('error running in the server', err);
    }
    console.log('yup! my express server is running on port:', port);
});