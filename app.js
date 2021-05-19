const express = require('express')

const app = express();
const port = process.env.PORT || 3030;

const path = require('path')
const publicPath = path.resolve(__dirname, './public')

app.use(express.static(publicPath))

app.listen(port, ()=> console.log('servidor corriendo en http://localhost:${port}'))

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})

app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
