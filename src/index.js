import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Servidor Express funcionando correctamente",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API funcionando correctamente",
  });
});

const startServer = async () => {
  try {
    console.log("Iniciando servidor...");
    console.log("PORT:", PORT);
    console.log("MONGODB_URI existe:", Boolean(process.env.MONGODB_URI));

    await connectDB();

    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
      console.log(`URL local: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error.message);
    process.exit(1);
  }
};

startServer();