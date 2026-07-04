import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("Falta MONGODB_URI en el archivo .env");
    }

    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB conectado en: ${connection.connection.host}`);
    console.log(`Base de datos: ${connection.connection.name}`);
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    throw error;
  }
};