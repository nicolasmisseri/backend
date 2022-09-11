const Container = require("./clase");
// const data = require("./products");
const data = require("./baseDeDatos/index")

const express = require('express')
const moment  = require('moment')


const products = new Container("./products.txt");
console.log('PRODUCTS', products)
products.save(data);
// products.getById(2);
// products.getAll();
// products.deleteById(2);
// products.deleteAll();

const app = express()

app.get('/', (req,res)=>{    
    res.send(products)
})

app.get('/productos', (req,res)=>{    
    res.send(data)
})

app.get('/productosRandom', (req,res)=>{
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    let valorRandom = getRandomInt(data.length)

    res.send(data[valorRandom])
    
})

const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${server.address().port}`)
})

server.on('error', (error) => console.error(error))