// src/seed/createCategories.seed.ts

import {AppDataSource} from "../data-source";
import {Category} from "../src/entities/career-category.entity";

export async function createCategories() {
    const repo = AppDataSource.getRepository(Category);

    const exists = await repo.findOneBy({ title: "Культура та мистецтво (Culture & Arts)" });
    if (!exists) {
        await repo.save({
            title: "Культура та мистецтво (Culture & Arts)",
            description: "Професії, пов’язані з творчістю, мистецтвом та культурними індустріями.",
        });
    }
}
