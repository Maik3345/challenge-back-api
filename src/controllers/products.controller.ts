import mongoose from "mongoose";
import productsModel from "../models/products.model";
import specialPriceModel from "../models/special-price.model";

export const findProducts = async (req: any, res: any) => {
  try {
    const data = await productsModel.find();
    console.log(data.length);
    return res.json(data);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Error al realizar la búsqueda",
    });
  }
};

export const findSpecialPrice = async (req: any, res: any) => {
  try {
    const userId = req.params.userId;
    const productName = req.params.productName;
    console.log(userId, productName);
    const product = await productsModel.find({
      name: productName,
    });

    if (!product.length) {
      return res.status(404).send({ message: "Producto no encontrado" });
    }

    const specialPrice = await specialPriceModel.find({
      user_id: userId,
      brand: product[0].brand,
    });

    const specialPriceValue = specialPrice.length
      ? specialPrice[0].special_price
      : product[0].price;

    console.log(specialPriceValue);

    const { name, description, stock, brand } = product[0];

    const newProduct = {
      name,
      description,
      stock,
      brand,
      price: specialPriceValue,
    };

    return res.json(newProduct);
  } catch (err: any) {
    res.status(500).send({
      message: err.message || "Error al realizar la búsqueda",
    });
  }
};
