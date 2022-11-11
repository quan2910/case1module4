import {Router} from "express";
import productController from "../controller/product-controller";

export const routerProduct = Router();
routerProduct.get('/products', productController.getAll);
routerProduct.get('/create', productController.showFormCreat);
routerProduct.post('/create', productController.createProduct);
routerProduct.get('/edit/:id', productController.formEditProduct);
routerProduct.post('/edit/:id', productController.editProduct);
routerProduct.get('/delete/:id', productController.deleteProduct);
routerProduct.get('/show/:id', productController.showFormProduct);
routerProduct.post('/show/:id', productController.showProduct);
routerProduct.post('/products', productController.findProductByName);