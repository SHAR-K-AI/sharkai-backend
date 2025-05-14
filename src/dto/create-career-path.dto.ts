// dto/create-career-path.dto.ts
export class CreateCareerPathDto {
    title: string;
    description?: string;
    goal_type: string;
    steps?: CreateCareerPathStepDto[];
}

// dto/create-career-path-step.dto.ts
export class CreateCareerPathStepDto {
    title: string;
    description?: string;
    step_type: string;
    reference_id?: number;
    step_order?: number;
}
