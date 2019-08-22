export class Service {
    id: number;
    name: string;
    description: string;
    type: string;
    constructor(id: number, name: string, description: string, type: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }

    isValid() {
        let result = false;
        if (this.name !== null
            && this.name !== ''
            && this.description !== null
            && this.description !== ''
            && this.type !== null
            && this.type !== '') {
            result = true;
        }
        return result;
    }
}
