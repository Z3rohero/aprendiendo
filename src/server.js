import express from 'express'
import  mysql from 'mysql2/promise'

const app = express();

const client =mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'toor'
})

const response = await client.query('SELECT * FROM   ');

app.listen(3000);

app.get("/",(res , req)=>{
    res.send(response);
})






