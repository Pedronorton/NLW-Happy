import express from 'express'
import './database/connection'
import routes from './routes'
import path from 'path'
import errorHandler from './errors/handler'
import cors from 'cors'

//Utilizando ORM (Object Relational Mapping) muito parecido com o que ocorre no spring, cada retorno é uma instancia da clase
const app = express()

//migrations = versionamento de banco, para que sempre o banco fique atualizado 

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))) // acessar a rota de imagens 
app.listen(3333)






