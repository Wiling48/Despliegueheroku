// const mongoose = require ("mongoose");
// //Ahora importamos app
// const app = require("./App");
// //Importamos el puerto y localhost
// //const host = process.env.HOST || `0.0.0.0`;
// const port = process.env.PORT || 3977;

// //Hacemos lo mismo para nuestra versión dela API
// const { IP_SERVER, PORT_DB } = require ("./config");

/* mongoose.set("useFindAndMoify", false); */
// mongoose.promise = global.promise;
// mongoose.connect(`mongodb+srv://admin:<password>@cluster0.nh008.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
// {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
//     if (err){
//         throw err;
//     }else{
//         console.log("La conexión a la base de datos es correcta");

//         app.listen(port, () =>{
//             console.log("######################");
//             console.log("###### API REST ######");
//             console.log("######################");
            
//         })
//     }
// });

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:holamundo3147@cluster0.nh008.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("Trabajando")
  // perform actions on the collection object
  //client.close();
});


///TODO SE CONECTA CON LA BASE DE DATOS REMOTA, NO LOCAL