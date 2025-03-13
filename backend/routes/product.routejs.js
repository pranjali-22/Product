import express from "express";
import {createProduct, deleteProduct, getProducts, updateProduct} from "../controllers/product.controller.js";

const router = express.Router();
export default router;

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct()); // patch - when updating some fields // put - when updating some fields
router.delete("/:id", deleteProduct);

export default router;

