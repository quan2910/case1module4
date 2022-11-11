import { Request, Response } from "express";
export declare class CategoryService {
    private categoriesRepository;
    constructor();
    findAll: (req: Request, res: Response) => Promise<any>;
}
