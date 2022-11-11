import {CategoryService} from "../service/category-service";
import {Request, Response} from "express";

export class CategoriesController {
    private categoriesService: CategoryService
    constructor() {
        this.categoriesService = new CategoryService();
    }

    getAll = async (req: Request, res: Response) => {
        let categories = await this.categoriesService.findAll(req, res);
        res.render('product/create', {
            listCategory : categories
        });
    }
}