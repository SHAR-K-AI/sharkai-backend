import {AppDataSource} from "../../data-source";
import {createProfessionCategories} from "./createProfessionCategories.seed";

AppDataSource.initialize().then(async () => {
    await createProfessionCategories();
    console.log("✅ Сіди успішно виконані");
    process.exit();
});