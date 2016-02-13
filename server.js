import express from 'express';

import {MongoClient} from 'mongodb';

let app= express();

//app.get ('/', (req, res) => res.send('hello express!!!!'));

app.use(express.static('public'))


let db; 

//process.evn.MONGO_URL fue creada como variable externa con export en la linea de comando
MongoClient.connect(process.env.MONGO_URL,(err, database) => {
    if (err) throw err;
    
    db= database;
    app.listen(3000, () => {console.log("Listening on port 3000")});
});


//Se define un get con url /data/links como una llamada a la db para traer todos los links.
app.get ('/data/links', (req,result) => {
    db.collection("links").find({}).toArray((error,links)=> {
        if (error) throw error;
        result.json(links);
    }); 
});