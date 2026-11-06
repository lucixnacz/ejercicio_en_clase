import mysql from 'mysql2/promise';

export let conexion= mysql.createPool({
    host: "localhost",
    user: "root",
    password:"brayden.0601",
    port:3306,
    database:"ejemplo"
})