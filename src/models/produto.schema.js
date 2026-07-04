const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    precio: { type: Number, required: true, min: 0 },
    descripcion: { type: String, required: true },
    categoria: { type: String, required: true },
    fechaCreacion: { type: Date, default: Date.now }
})
 
const Producto = mongoose.model('Producto', productoSchema)
