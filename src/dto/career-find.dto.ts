export class CreateCareerFindDto {
    education_level: string;
    age_group: string;
    interest_area: string;
    test_preferences: string[]; // буде збережено як JSON
}
