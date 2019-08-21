import { Service } from 'src/app/entities/service.entity';
export abstract class ServiceRepository {
    abstract create(service: Service): Service;
    abstract update(id: number, service: Service): Service;
    abstract delete(id: number): boolean;
    abstract filterBy(type: string): Service[];
}
