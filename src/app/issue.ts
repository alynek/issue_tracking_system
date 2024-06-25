export interface Issue {
    issueNumber: number;
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    type: "Feature" | "Bug" | "Documentation"
    completed?: Date;
}
