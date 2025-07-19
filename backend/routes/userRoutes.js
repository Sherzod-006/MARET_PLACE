import express from 'express';
import { registerUser, loginUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/profile:id', updateUser);
router.delete('/delete:id', deleteUser)

export default router;