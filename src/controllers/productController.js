const products = [
{
        id: 1,
        nombre : "producto 1",
        precio : 1200
    }
]

export const allProducts = (req,res)=>{
    res.status(200).json(products)
} 

export const oneProduct = (req,res)=>{
    console.log(req.body)
    const {id} = req.body
    const product = products.find(prodcutoToFind => prodcutoToFind.id === id)
    if(product){
        res.status(200).json(product)
    }
    res.status(400).json({message : "Producto no encontrado"})
}
export const addProduct = async (req,res)=>{
    const {nombre,precio,descripcion,categoria} = req.body
    const newProduct = {
        nombre,
        precio,
        descripcion,
        categoria}
    try {
    const producto = await Producto.create(newProduct);

    res.status(201).json({
      success: true,
      message: "Producto creado correctamente",
      data: producto,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error al crear el producto",
      error: error.message,
    });
  }
}

export const deleteProduct = (req,res)=>{
    const {id} = req.body
    const productToDelete = products.find(productToFind => productToFind.id === id)
    if(productToDelete){
        const newProducts = products.filter(productToFind => productToFind.id !== id)
        return res.status(200).json({message : "Producto eliminado correctamente", product: productToDelete, products: newProducts})
    }
    res.status(400).json({message : "Producto no encontrado"})
}

export const updateProduct = (req,res)=>{
    const {id,nombre,precio} = req.body
    const productToUpdate = products.find(productToFind => productToFind.id === id)
    if(productToUpdate){
        productToUpdate.nombre = nombre
        productToUpdate.precio = precio
        return res.status(200).json({message : "Producto actualizado correctamente", product: productToUpdate, products})
    }
    res.status(400).json({message : "Producto no encontrado"})
}