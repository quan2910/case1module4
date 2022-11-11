"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("../service/product-service");
const category_service_1 = require("../service/category-service");
class ProductController {
    constructor() {
        this.getAll = async (req, res) => {
            let products = await this.productService.findAll(req, res);
            res.render('product/list', {
                listProduct: products
            });
        };
        this.findProductByName = async (req, res) => {
            let product = await this.productService.findProductByName(req, res);
            res.render('product/list', {
                listProduct: product
            });
        };
        this.showFormCreat = async (req, res) => {
            let categories = await this.categoriesService.findAll(req, res);
            res.render('product/create', {
                listCategory: categories
            });
        };
        this.showFormProduct = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let product = await this.productService.findById(req, res);
                res.render('product/showProduct', {
                    listProduct: product[0]
                });
            }
        };
        this.showProduct = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.createProduct = async (req, res) => {
            await this.productService.saveProduct(req, res);
        };
        this.formEditProduct = async (req, res) => {
            if (!isNaN(+req.params.id)) {
                let categories = await this.categoriesService.findAll(req, res);
                res.render('product/edit', {
                    listCategory: categories
                });
            }
        };
        this.editProduct = async (req, res) => {
            await this.productService.editProduct(req, res);
        };
        this.deleteProduct = async (req, res) => {
            await this.productService.deleteProduct(req, res);
        };
        this.productService = new product_service_1.ProductService();
        this.categoriesService = new category_service_1.CategoryService();
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
//# sourceMappingURL=product-controller.js.map