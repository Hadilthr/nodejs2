const 
    express = require('express'),
    app = express(),
    pg = require("pg"),
    bodyparser = require("body-parser"), // هذي مكتبة تساعد Express يفهم البيانات اللي يبعثهالك المستخدم في request body.
    cors = require("cors"); // cors تسمح بالطلبات من origins مختلفة.

require("dotenv").config();

app.use(bodyparser.json()); // يخلي Express يقرا البيانات بصيغة JSON.
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const 
    port = 3002,
    database = process.env.DATABASE,

     client = new pg.Client({
    host: process.env.PGHOST || 'localhost',
    port: Number(process.env.PGPORT || 5432),
    database: database,
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD
});

client.connect().then(function() {
    console.log("PostgreSQL connected!");

    app.listen(port, function() {
        console.log("server is running on port " + port);
    });
}).catch(function(err) {
    console.log("Database connection error:", err.message);
});

app.get("/", getfile);
app.post("/sendData",sendData);
app.post("/editData",editData);
app.post("/deleteData",deleteData);
app.get("/getdata",getdata);
function getdata(req,res){
    let sqlsen ='select * from test;'
    client.query(sqlsen).then(function(data)){
        res.send(data);

    }
}
function deleteData(req,res){
        let id = req.body.number;
        let sqlsen = 'delete from test where id =$1;'
        let sqldata=[id];
        client.query(sqlsen,sqldata);
}

function editData(req,res) {
    let {number,test} = req.body;
    let sqlsen = 'update test set fullName=$1 where id =$2;';
    let datasql = [test,number];
    client.query(sqlsen,datasql);
    
}

function sendData(req, res) {
    let number =req.body.number;
    let data = req.body.test;
    let sqlsen ='insert into test (id,fullName)values ($1 ,$2);'
    let datasql =[number,data];
    client.query(sqlsen,datasql).then(function(){
        console.log("data sended");
    });

}


const path = require('path');

function getfile(req, res) {
    res.sendFile(path.join(__dirname, "..", "files", "index.html"));
}
