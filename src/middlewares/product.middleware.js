import Product from '../models/product.model.js';

export const verificarProductoPorId = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "El producto no existe" });
    req.producto = product;
    next();
  } catch (error) {
    next(error);
  }
};