import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

import {MongoClient} from 'mongodb';

let app= express();


app.use(express.static('public'));


let db; 
//process.evn.MONGO_URL fue creada como variable externa con export en la linea de comando
MongoClient.connect(process.env.MONGO_URL,(err, database) => {
    if (err) throw err;
    
    db= database;
    
    app.use('/graphql',GraphQLHTTP({
            schema: schema(db), //esto da acceso a mongoDB para nuestro schema
            graphiql: true  //necesitará en schema.js una función que reciba esa db
        })
    );
    
    app.listen(3000, () => {console.log("- Listening on port 3000")}); 
    //Sale en la linea de comandos al iniciar la app con nodemon
});

// YA NO ES NECESARIO YA QUE AHORA SE USA MONGODB EN VEZ DE LA API
//Se define un get con url /data/links como una llamada a la db para traer todos los links.
// app.get ('/data/links', (req,result) => {
//     db.collection("links").find({}).toArray((error,links)=> {
//         if (error) throw error;
//         result.json(links);
//     }); 
// });