"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const category_service_1 = require("../service/category-service");
class CategoriesController {
    constructor() {
        this.getAll = async (req, res) => {
            let categories = await this.categoriesService.findAll(req, res);
            res.render('product/create', {
                listCategory: categories
            });
        };
        this.categoriesService = new category_service_1.CategoryService();
    }
}
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories-controller.js.map