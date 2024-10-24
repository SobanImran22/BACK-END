import Product from '../model/taskModel.js';

// Fetch all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send({ message: "All products fetched successfully", data: products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send({ message: "Error fetching products" });
    }
};

// Fetch a single product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send({ message: "Product fetched successfully", data: product });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).send({ message: "Error fetching product" });
    }
};

// Create a new product
export const createProduct = async (req, res) => {
    const { productName, productPrice, currencyCode, numberOfSale, rating, isFreeShipping, shopName } = req.body;

    // Check for missing fields
    if (!productName || !productPrice || !currencyCode || !numberOfSale || !rating || !isFreeShipping || !shopName) {
        return res.status(400).send({
            message: "All fields are required: productName, productPrice, currencyCode, numberOfSale, rating, isFreeShipping, shopName"
        });
    }

    try {
        const newProduct = new Product({
            productName,
            productPrice,
            currencyCode,
            numberOfSale,
            rating,
            isFreeShipping,
            shopName
        });

        const savedProduct = await newProduct.save();
        res.send({ message: "Product added successfully", data: savedProduct });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).send({ message: "Error creating product" });
    }
};

// Update a product by ID
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send({ message: "Product updated successfully", data: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).send({ message: "Error updating product" });
    }
};

// Delete a product by ID
export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).send({ message: "Product not found" });
        }
        res.send({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).send({ message: "Error deleting product" });
    }
};
