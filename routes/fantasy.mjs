import express from "express";
import products from '../db/products.mjs'
import products2 from '../db/products2.mjs'
import products3 from '../db/products3.mjs'
import products4 from '../db/products4.mjs'
import products5 from '../db/products5.mjs'
import products6 from '../db/products6.mjs'
const router = express.Router();
router.get("/products", (req,res) => {
    res.json(products);
});
router.post("/products", (req,res) => {
    res.json(products);
});
router.delete("/products", (req,res) => {
    res.json(products);
});
router.get("/products2", (req,res) => {
    res.json(products2);
});
router.post("/products2", (req,res) => {
    res.json(products2);
});
router.delete("/products2", (req,res) => {
    res.json(products2);
});
router.get("/products3", (req,res) => {
    res.json(products3);
});
router.post("/products3", (req,res) => {
    res.json(products3);
});
router.delete("/products3", (req,res) => {
    res.json(products3);
});
router.get("/products4", (req,res) => {
    res.json(products4);
});
router.post("/products4", (req,res) => {
    res.json(products4);
});
router.delete("/products4", (req,res) => {
    res.json(products4);
});
router.get("/products5", (req,res) => {
    res.json(products5);
});
router.post("/products5", (req,res) => {
    res.json(products5);
});
router.delete("/products5", (req,res) => {
    res.json(products5);
});
router.get("/products6", (req,res) => {
    res.json(products6);
});
router.post("/products6", (req,res) => {
    res.json(products6);
});
router.delete("/products6", (req,res) => {
    res.json(products6);
});
router.get("/products7", (req,res) => {
    res.json(products7);
});
router.post("/products7", (req,res) => {
    res.json(products7);
});
router.delete("/products7", (req,res) => {
    res.json(products7);
});
router.get("/products8", (req,res) => {
    res.json(products8);
});
router.post("/products8", (req,res) => {
    res.json(products8);
});
router.delete("/products8", (req,res) => {
    res.json(products8);
});
router.get("/products9", (req,res) => {
    res.json(products9);
});
router.post("/product9s", (req,res) => {
    res.json(products9);
});
router.delete("/products9", (req,res) => {
    res.json(products9);
});
router.get("/products10", (req,res) => {
    res.json(products10);
});
router.post("/products10", (req,res) => {
    res.json(products10);
});
router.delete("/products10", (req,res) => {
    res.json(products10);
});



export default router
 