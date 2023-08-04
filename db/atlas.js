import {MongoClient} from  'mongodb'
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@cluster0.xuq9yaf.mongodb.net/${process.env.ATLAS_DB}`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export async function con() {
    const client = new MongoClient(uri, options);
    try {
        await client.connect();
        const db = client.db();
        return db;
    } catch (error) {
        throw new Error('Error al conectar a la base de datos: ' + error.message);
    }
}