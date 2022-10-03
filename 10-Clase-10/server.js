import express from 'express';
import handlebars from 'express-handlebars'
import productshbs from './products-hbs.js'
import productsejs from './products-ejs.js'
import productspug from './products-pug.js'


import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const {json, urlencoded } = express;
app.use(json())
app.use(urlencoded({extended: true}));
app.use(express.static('./public'));

app.engine(
    "hbs",
    handlebars.engine({
        extname: ".hbs" , 
        defaultLayout: "index.hbs",
        layoutsDir: __dirname +"/views/layouts",
        partialsDir: __dirname +"/views/partials"
    }) 
)
app.set("view engine", "hbs")
app.set("views", "./views")
app.use('/hbs/', productshbs);
const PORT = 8080;
app.listen(PORT, (err)=>{
    if(err) console.log(err);
    console.log(`Listening on port ${PORT}`)
})