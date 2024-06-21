// routes/UserRoute.ts

import { Router } from 'express';
import UserController from '../controllar/usercontroller';
import usercontroller from '../controllar/usercontroller';

const router = Router();

router.post('/signin', UserController.createUser);
router.post('/login', usercontroller.login);


export default router;
