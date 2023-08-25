import mongoose from "mongoose";
import "dotenv/config";

const DB_URL = process.env.DB_URL
const dbConnection = async () => {
    try {
        mongoose.connect(DB_URL,  {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB ok')
    } catch (error) {
        console.log(error)
        throw new Error('Error al conectarme con la base de datos')
    }
 
};
export {DB_URL, dbConnection}
