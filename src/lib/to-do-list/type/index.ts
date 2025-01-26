export interface Task {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface TaskStore {
    tasks: Task[];
    addTask: (task: Task) => void;
    removeTask: (id: string) => void;
    toggleComplete: (id: string) => void;
}
