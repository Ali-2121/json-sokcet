import app from './app.js';
import dataBase from './databases.js'
app.listen(process.env.PORT, ()=>{
    console.log(`Listen at port ${process.env.PORT}`)
})