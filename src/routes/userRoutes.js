import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/**
 * Métodos de um Controller
 *
 *  index -> Lista todo os itens (usuários, produtos, carros, etcs) -> GET
 *  show -> Lista um item -> GET
 *  create -> Leva dados para serem usudos na view de criação -> GET
 *  store -> Salva os dados da view de Create no Banco -> POST
 *  edit -> Leva dados para serem usudos na view de edição -> GET
 *  update -> Atualiza os dados da view de edit no banco de dados ->PATCH OU PUT
 *  delete -> remove um registro do banco de dados -> DELETE
 */
