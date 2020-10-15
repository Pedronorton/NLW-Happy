import {Router} from 'express'
import './database/connection'
import OrphanagesController from './controllers/OrphanagesController'
import multer from 'multer'
import uploadConfig from './config/uploads'

//Utilizando ORM (Object Relational Mapping) muito parecido com o que ocorre no spring, cada retorno é uma instancia da clase

const routes = Router()
const upload = multer(uploadConfig)

//migrations = versionamento de banco, para que sempre o banco fique atualizado 



routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

routes.get('/orphanages', OrphanagesController.index);

routes.get('/orphanages/:id',OrphanagesController.show);



export default routes
