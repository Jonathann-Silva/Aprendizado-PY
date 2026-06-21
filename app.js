import express from 'express'

const app = express()

//rotas  -  (https://www.youtube.com/watch?v=K31sLgAhd9Q)


//servidor / api / back (eron function, moderno) (node --watch app.js - rodar arquivo)
app.listen (3000, () => {
    console.log("Servidor Rodando")
})