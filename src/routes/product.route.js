import express from 'express';
const productRoutes = express.Router();
import {allProducts,oneProduct,addProduct,deleteProduct,updateProduct} from '../controllers/productController.js';


productRoutes.get('/', (req, res) => {
  res.send('Hola');
});
productRoutes.get('/allProducts', allProducts);
productRoutes.get('/oneProduct', oneProduct);
productRoutes.post('/addProduct', addProduct);
productRoutes.delete('/deleteProduct', deleteProduct);
productRoutes.put('/updateProduct', updateProduct);

export default productRoutes;