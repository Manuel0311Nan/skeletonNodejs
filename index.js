import express from "express";
import "dotenv/config";
import { dbConnection } from "./database/config.js";
import cors  from 'cors';

//Variables de entorno
const PORT = process.env.PORT

//conexion BBDD
dbConnection();

const app = express();
//https://www.npmjs.com/package/cors
app.use(cors());


app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    })
});

app.listen(PORT, () => {
    console.log('Servidor en puerto ' + PORT)
});