export class Service {
    id: number;
    name: string;
    description: string;
    type: string;
    constructor(name: string, description: string, type: string) {
        this.name = name;
        this.description = description;
        this.type = type;
    }
}
