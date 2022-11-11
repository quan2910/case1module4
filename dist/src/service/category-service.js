"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const data_source_1 = require("../data-source");
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.findAll = async (req, res) => {
            let categories = await this.categoriesRepository.find();
            return categories;
        };
        data_source_1.AppDataSource.initialize().then(connection => {
            console.log("Connected Database");
            this.categoriesRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
        });
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category-service.js.map