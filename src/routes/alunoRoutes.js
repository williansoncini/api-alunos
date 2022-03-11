import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';
import AlunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', loginRequired, AlunoController.index);
router.post('/', loginRequired, AlunoController.store);
router.put('/:id', loginRequired, AlunoController.update);
router.get('/:id', loginRequired, AlunoController.show);
router.delete('/:id', loginRequired, AlunoController.delete);

export default router;
