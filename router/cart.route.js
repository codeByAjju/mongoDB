import express from "express";
import { addToCart,cartData} from "../controller/cart.controller.js";
const router =express.Router();

router.post("/add-to-cart",addToCart);
router.get("/:userId",cartData);
router.get("/:userId",cartData);

export default router;