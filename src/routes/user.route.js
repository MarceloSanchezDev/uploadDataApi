import express from 'express';
const userRoutes = express.Router();
import {getAllUsers,getOneUser,createUser,deleteUser,updateUser} from '../controllers/userController.js';
import { verificarUsuarioPorId } from '../middlewares/user.middleware.js';

userRoutes.get('/', (req, res) => {
  res.send('Hola');
});
userRoutes.get('/getAllUsers', getAllUsers);
userRoutes.get('/getUser/:id', getOneUser);
userRoutes.post('/addUser', createUser);
userRoutes.delete('/deleteUser/:id',verificarUsuarioPorId, deleteUser);
userRoutes.put('/updateUser/:id', verificarUsuarioPorId, updateUser);

export default userRoutes;