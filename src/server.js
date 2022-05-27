const express = require('express')
//importação do express

const routes = require("./routes")

const app = express()
app.use(express.json())
//inicialização do express

app.use(routes)

const PORT = 3344
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))
//configuração da porta para o express
