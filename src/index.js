import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(
  cors(
{
    origin: "https://front-upload-data-api.vercel.app/",
    credentials: true,
  })
);  

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
    database: "MongoDB Atlas",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const startServer = async () => {
  try {
    console.log("Iniciando servidor...");
    console.log("PORT:", PORT);
    console.log("MONGODB_URI existe:", Boolean(process.env.MONGODB_URI));
    console.log(
      "Tipo de conexión:",
      process.env.MONGODB_URI?.startsWith("mongodb+srv://")
        ? "MongoDB Atlas"
        : "MongoDB local/Docker"
    );

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