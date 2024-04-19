import { Router } from 'express';
import { getAll, insertOne, deleteOne, insertMany, getOne} from '../controllers/dataSocket.controller.js';
const router = Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', insertOne);
router.post('/i', insertMany);
// router.post('/:barcode', updateOne);
router.get('/delete/:id', deleteOne);

export default router;