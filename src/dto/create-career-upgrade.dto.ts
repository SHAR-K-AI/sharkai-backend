export class CreateCareerUpgradeDto {
    current_position: string;
    industry: string;
    goal: string;
    skills_to_improve: string[]; // масив навичок
    courses_taken?: string[]; // необов'язково
    available_hours: string;
}
