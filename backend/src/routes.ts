import {Router} from 'express'
import './database/connection'
import OrphanagesController from './controllers/OrphanagesController'

//Utilizando ORM (Object Relational Mapping) muito parecido com o que ocorre no spring, cada retorno é uma instancia da clase
const routes = Router()

//migrations = versionamento de banco, para que sempre o banco fique atualizado 


routes.post('/orphanages', OrphanagesController.create);

routes.get('/orphanages', OrphanagesController.index);


export default routes
