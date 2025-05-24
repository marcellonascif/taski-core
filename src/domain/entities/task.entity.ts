export class Task {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string | null,
        public readonly plan: string | null,
        public readonly scheduledDate: Date,
        public readonly dueDate: Date | null,
        public readonly priority: number,
        public readonly duration: number,
        public readonly category: string,
        public readonly mentalEnergy: number,
        public readonly physicalEnergy: number,
        public readonly userId: string,
    ) {}
}
