import express from 'express';
const userRoutes = express.Router();
import {getAllUsers,getOneUser,createUser,deleteUser,updateUser} from '../controllers/userController.js';


userRoutes.get('/', (req, res) => {
  res.send('Hola');
});
userRoutes.get('/getAllUsers', getAllUsers);
userRoutes.get('/getUser/:id', getOneUser);
userRoutes.post('/addUser', createUser);
userRoutes.delete('/deleteUser/:id', deleteUser);
userRoutes.put('/updateUser/:id', updateUser);

export default userRoutes;