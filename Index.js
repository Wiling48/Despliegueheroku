// // const mongoose = require ("mongoose");
// // //Ahora importamos app
// // const app = require("./App");
// // //Importamos el puerto y localhost
// // //const host = process.env.HOST || `0.0.0.0`;
// // const port = process.env.PORT || 3977;

// // //Hacemos lo mismo para nuestra versión dela API
// // const { IP_SERVER, PORT_DB } = require ("./config");

// /* mongoose.set("useFindAndMoify", false); */
// // mongoose.promise = global.promise;
// // mongoose.connect(`mongodb+srv://admin:<password>@cluster0.nh008.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
// // {useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
// //     if (err){
// //         throw err;
// //     }else{
// //         console.log("La conexión a la base de datos es correcta");

// //         app.listen(port, () =>{
// //             console.log("######################");
// //             console.log("###### API REST ######");
// //             console.log("######################");
            
// //         })
// //     }
// // });

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://admin:holamundo3147@cluster0.nh008.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("Trabajando")
// //   perform actions on the collection object
// //   client.close();
//  });

//#################################################################
/* const bodyParser = require("body-parser");
const mongoose = require ("mongoose");
//Ahora importamos app
const app = require("./App");
//Importamos el puerto
const port = process.env.PORT || 3977;
//Hacemos lo mismo para nuestra versión dela API
const { API_VERSION, IP_SERVER, PORT_DB } = require ("./config");
mongoose.connect(`mongodb+srv://${IP_SERVER}:${PORT_DB}`,
{useNewUrlParser: true, useUnifiedTopology: true}, (err, res) => {
    if (err){
        throw err;
    }else{
        console.log("La conexión a la base de datos es correcta");

        app.listen(port, () =>{
            console.log("######################");
            console.log("###### API REST ######");
            console.log("######################");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
        })
    }
}); */


///TODO SE CONECTA CON LA BASE DE DATOS REMOTA, NO LOCAL

// import serverless from 'serverless-http';
// import Express from 'express';
// import Cors from 'cors';
// import dotenv from 'dotenv';

// import { conectarBD} from './db/db';
// import jwt from 'express-jwt';
// import jwks from 'jwks-rsa';

// import rutasRegistro from './routers/registerProducts';
// import rutasSell from './routers/registerSell';
// import rutasUsuario from './routers/user';
// import autorizacionEstadoUsuario from './services/jwt';

// dotenv.config({ path: './.env' });

// const port = process.env.PORT || 5000;

// const app = Express();

// app.use(Express.json());
// app.use(Cors());

// var jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://${authConfig.domain}/.well-known/jwks.json',
//   }),
//   audience: authConfig.audience,
//   issuer: 'https://${authConfig.domain}/',
//   algorithms: ['RS256'],
// });

// // 4 y 5: enviarle el token a auth0 para que devuelva si es valido o no
// app.use(jwtCheck);

// app.use(autorizacionEstadoUsuario);

// app.use(rutasRegistro);
// app.use(rutasSell);
// app.use(rutasUsuario);

// const main = () => {
//   return app.listen(port, () => {
//     console.log(`escuchando puerto ${port}`);
//   });
// };

// const index = {
//   handler: serverless(conectarBD(main)),
// };

// export default index;

//####################################################################

const { MongoClient } = require("mongodb");

 

// Replace the following with your Atlas connection string                                                                                                                                        

const url = "mongodb+srv://admin:xuCX7iUuzbsRY6sO@cluster0.nh008.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(url);

async function run() {

    try {

        await client.connect();

        console.log("Connected correctly to server");

    } catch (err) {

        console.log(err.stack);

    }

}

run().catch(console.dir);