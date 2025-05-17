import {AppDataSource} from "../data-source";
// import {createProfessionCategories} from "./createProfessionCategories.seed";
// import {createRiasecTestWithQuestions} from "./createRiasecTest.seed";
import {createMbtiTestWithQuestions} from "./createMbtiTest.seed";
// import {createDiscTestWithQuestions} from "./createDistTest.seed";
// import {createGallupTestWithQuestions} from "./createGallupTest.seed";
// import {createBigFiveTestWithQuestions} from "./createBigFiveTest.seed";
// import {createAsvabTestWithQuestions} from "./createAsvabTest.seed";

AppDataSource.initialize().then(async () => {
    // await createProfessionCategories();
    // await createRiasecTestWithQuestions();
    await createMbtiTestWithQuestions();
    // await createDiscTestWithQuestions();
    // await createGallupTestWithQuestions();
    // await createBigFiveTestWithQuestions();
    // await createAsvabTestWithQuestions();
    console.log("✅ Сіди успішно виконані");
    process.exit();
});