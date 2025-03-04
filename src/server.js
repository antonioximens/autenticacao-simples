const express = require('express')
const path = require('path')
const router = require('./routes')
const session = require('express-session')

const app = express()

// configurando o ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true}))

app.use(session({
    secret: 'palavra-secreta', // chave secreta
    resave: false, // não salva a sessão a cada requisição
    saveUninitialized: true, // salva na memória
    cokkie: { secure: false}
}))

// importando router
app.use(router)

const PORT = 3000

app.listen(PORT, () => console.log(`Servidor is running on port http://localhost:${PORT}`))