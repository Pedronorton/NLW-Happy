import express from 'express'
import './database/connection'
import routes from './routes'

//Utilizando ORM (Object Relational Mapping) muito parecido com o que ocorre no spring, cada retorno é uma instancia da clase
const app = express()

//migrations = versionamento de banco, para que sempre o banco fique atualizado 


app.use(express.json())
app.use(routes)
app.listen(3333)






