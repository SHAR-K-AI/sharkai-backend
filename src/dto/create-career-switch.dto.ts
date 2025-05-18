export class CreateCareerSwitchDto {
    current_profession: string;
    reason_to_change: string;
    target_area: string;
    existing_skills: string[]; // масив навичок
    ready_to_learn: boolean;
}
