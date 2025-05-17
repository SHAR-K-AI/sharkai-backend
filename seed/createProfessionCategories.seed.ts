//
// import {AppDataSource} from "../data-source";
// import categoriesData from "./data/profession-categories";
// import {ProfessionCategory} from "../src/entities/profession-category.entity";
//
// interface CategoriesData {
//     nameUa: string;
//     nameEn: string;
//     descriptionUa: string;
//     descriptionEn: string;
// }
//
// export async function createProfessionCategories() {
//     const repo = AppDataSource.getRepository(ProfessionCategory);
//     const categories = categoriesData as CategoriesData[];
//     //
//     // console.log(categoriesData, "ddddddddd");
//
//     for (const category of categories) { // Тепер ітеруємося по categories, а не по categoriesData
//         const exists = await repo.findOneBy({ nameUa: category.nameUa });
//         if (!exists) {
//             await repo.save({
//                 nameUa: category.nameUa,
//                 nameEn: category.nameEn,
//                 descriptionUa: category.descriptionUa,
//                 descriptionEn: category.descriptionEn,
//             });
//         }
//     }
// }