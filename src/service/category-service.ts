import {AppDataSource} from "../data-source"
import {Product} from "../model/product";
import {Request, Response} from "express";
import {UploadedFile} from "express-fileupload";
import {Category} from "../model/category";

export class CategoryService{
    private categoriesRepository : any;
    constructor() {
        AppDataSource.initialize().then(connection => {
            console.log("Connected Database")
            this.categoriesRepository = AppDataSource.getRepository(Category);
        });
    }
    findAll = async (req: Request, res : Response) => {
        let categories = await this.categoriesRepository.find();
        return categories;
    }
}