import express from 'express';
const productRoutes = express.Router();
import {getAllProducts,getOneProduct,createProduct,deleteProduct,updateProduct} from '../controllers/productController.js';


productRoutes.get('/', (req, res) => {
  res.send('Hola');
});
productRoutes.get('/allProducts', getAllProducts);
productRoutes.get('/oneProduct', getOneProduct);
productRoutes.post('/addProduct', createProduct);
productRoutes.delete('/deleteProduct', deleteProduct);
productRoutes.put('/updateProduct', updateProduct);

export default productRoutes;