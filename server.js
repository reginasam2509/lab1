var express  = require("express");
var app = express();

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Ex app listening at: https://%s:%s", host,port );
})

app.get("/whoami/:name",function(req, res){
    var name= req.params.name;
    var output;
    console.log(name);
    if(name=='Jey'){
        output= name+"is a NEC Alumni";
    }
    else{
        output= name+" is a student";
    }
    res.end(JSON.stringify(output));
})
