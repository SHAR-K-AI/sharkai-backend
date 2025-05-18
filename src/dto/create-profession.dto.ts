export class CreateProfessionDto {
    categoryId?: number;
    mbti?: any;
    riasec?: any;
    gallup?: any;
    bigFiveIdeal?: any;
    asvab?: any;
    salaryRange?: any;
    demand?: number;

    translations?: {
        language_code: string;
        field: string;
        value: string;
    }[];
}
