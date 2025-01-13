import express from "express";
import userController from "../controllers/userController.js";

const router = express.Router();

router.post('/signup', userController.createUser);
router.post('/login', userController.loginUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUser);

export default router;