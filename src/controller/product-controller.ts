import {ProductService} from "../service/product-service";
import {Request, Response} from "express";
import {CategoryService} from "../service/category-service";

export class ProductController {
    private productService: ProductService

    private categoriesService: CategoryService

    constructor() {
        this.productService = new ProductService();

        this.categoriesService = new CategoryService();
    }

    getAll = async (req: Request, res: Response) => {
        let products = await this.productService.findAll(req, res);
        res.render('product/list', {
            listProduct : products
        });
    }
    findProductByName = async (req: Request, res: Response) =>{
        let product = await this.productService.findProductByName(req,res)
        res.render('product/list',{
            listProduct: product
        })
    }

    showFormCreat = async (req: Request, res: Response) => {

        let categories = await this.categoriesService.findAll(req, res);
         res.render('product/create', {
             listCategory : categories
         });
    }
    showFormProduct = async (req: Request, res: Response) => {
        if (!isNaN(+req.params.id)) {
            let product = await this.productService.findById(req, res);
            res.render('product/showProduct', {
                listProduct: product[0]
            });
        }
    }
    showProduct = async (req: Request, res: Response) => {
        await this.productService.editProduct(req, res)
    }

    createProduct = async (req: Request, res: Response) => {
        await this.productService.saveProduct(req, res);
    }
    formEditProduct = async (req: Request, res: Response) => {
        if (!isNaN(+req.params.id)) {
            let categories = await this.categoriesService.findAll(req, res);
            res.render('product/edit', {
                listCategory : categories
            });
        }
    }

    editProduct = async (req: Request, res: Response) => {
        await this.productService.editProduct(req, res)
    }
    deleteProduct = async (req: Request, res: Response) => {
      await  this.productService.deleteProduct(req,res)
    }
}
export default new ProductController();