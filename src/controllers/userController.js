import User from "../models/user.model.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al obtener usuarios",
      error: error.message,
    });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "ID de usuario inválido",
      error: error.message,
    });
  }
};

export const createUser = async (req, res) => {
  try {
    const { nombre, email, password, apellido } = req.body;

    const user = await User.create({
      nombre,
      email,
      password,
      apellido,
    });

    res.status(201).json({
      success: true,
      message: "Usuario creado correctamente",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      message: "Usuario eliminado correctamente",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error al eliminar usuario",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Usuario no encontrado",
      });
    }

    res.status(200).json({
      success: true,
      message: "Usuario actualizado correctamente",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error al actualizar usuario",
      error: error.message,
    });
  }
};