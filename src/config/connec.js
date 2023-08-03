import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

export const servidor = ({
    port: process.env.PORT || 3000,
    addresses: process.env.IP,
});
