import {AppDataSource} from "../../data-source";
import {createProfessionCategories} from "./createProfessionCategories.seed";
import {createRiasecTestWithQuestions} from "./createRiasecTest.seed";

AppDataSource.initialize().then(async () => {
    await createProfessionCategories();
    await createRiasecTestWithQuestions();
    console.log("✅ Сіди успішно виконані");
    process.exit();
});