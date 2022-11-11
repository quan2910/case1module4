import { Request, Response } from "express";
export declare class CategoriesController {
    private categoriesService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
