import {AppDataSource} from "../data-source";
// import {createRiasecTestWithQuestions} from "./createRiasecTest.seed";
import {createMbtiTestWithQuestions} from "./createMbtiTest.seed";
import {createProfessionCategoriesSeed} from "./createProfessionCategories.seed";
import {createSkillsSeed} from "./createSkills.seed";
import {createInterestsSeed} from "./createInterests.seed";
import {createPrinciplesSeed} from "./createPrinciples.seed";
import {createEducationLevelsSeed} from "./createEducationLevels.seed";
import {createEmploymentTypeSeed} from "./createEmploymentTypes.seed";
import {createEnvironmentTypesSeed} from "./createEnvironmentTypes.seed";
import {createLearningPathSeed} from "./createLearningPath.seed";

// import {createDiscTestWithQuestions} from "./createDistTest.seed";
// import {createGallupTestWithQuestions} from "./createGallupTest.seed";
// import {createBigFiveTestWithQuestions} from "./createBigFiveTest.seed";
// import {createAsvabTestWithQuestions} from "./createAsvabTest.seed";

AppDataSource.initialize().then(async () => {
    // await createProfessionCategories();
    // await createRiasecTestWithQuestions();


    // await createMbtiTestWithQuestions();
    // await createProfessionCategoriesSeed();
    //
    // await createSkillsSeed();
    // await createInterestsSeed();
    // await createPrinciplesSeed();
    // await createEducationLevelsSeed();
    // await createEmploymentTypeSeed();
    // await createEnvironmentTypesSeed();
    await createLearningPathSeed();


    // await createDiscTestWithQuestions();
    // await createGallupTestWithQuestions();
    // await createBigFiveTestWithQuestions();
    // await createAsvabTestWithQuestions();
    console.log("✅ Сіди успішно виконані");
    process.exit();
});