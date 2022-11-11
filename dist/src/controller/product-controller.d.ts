import { Request, Response } from "express";
export declare class ProductController {
    private productService;
    private categoriesService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    findProductByName: (req: Request, res: Response) => Promise<void>;
    showFormCreat: (req: Request, res: Response) => Promise<void>;
    showFormProduct: (req: Request, res: Response) => Promise<void>;
    showProduct: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    formEditProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProduct: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
