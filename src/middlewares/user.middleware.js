import User from '../models/user.model.js';

export const verificarUsuarioPorId = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.user);
    if (!user) return res.status(404).json({ error: "El usuario no existe" });
    req.usuario = user;
    next();
  } catch (error) {
    next(error);
  }
};