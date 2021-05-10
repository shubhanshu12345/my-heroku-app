const http = require("http");
const fs = require("fs");
const express=require('express');
const app=express();
const path=require("path");
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static("assets"));


var contacts=[
 
];

app.get('/',function(req,res){
  return res.render('view',{'head':'CONTACT-LIST',  // PASSING head and contact in ejs file 
  'contact': contacts
})
})


app.post("/create-contact",function(req,res){
  console.log(req.body); // what we write in the form basically { name: 'shubhu', phone: '9013469395' }

  contacts.push({              //add in the array at last
    name:req.body.name,
    phone:req.body.phone
  })

  console.log(contacts); 
  return res.redirect('/');        //in order to redirect back to home page only
})


app.get('/delete-contact/',function(req,res){  ///delete-contact/?phone<%= contact[i].phone%>
  let phone=req.query.phone;
  const contactindex=contacts.findIndex((contact)=>{ //to find the index which is being clicked by the user
    return contact.phone ==phone;
  })
  console.log("phone index:",contactindex);
  contacts.splice(contactindex,1);      // splice is used to remove the content from a particular position and its second parameter takes the no. of elements that we want to remove
 return res.redirect('/');
})



app.listen(process.env.PORT, function (r, e) {
    if (e) {
      console.log(e);
    } else {
      console.log("running");
    }
  });
  