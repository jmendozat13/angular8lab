import { Injectable } from '@angular/core';
import { Service } from 'src/app/entities/service.entity';
import { ServiceRepository } from '../repository/service.repository';

@Injectable({
  providedIn: 'root'
})
export class ServiceUseCase {

  constructor(private readonly serviceRepository: ServiceRepository) { }

  update(id: number, service: Service): Service {
    return this.serviceRepository.update(id, service);
  }

  create(service: Service): Service {
    return this.serviceRepository.create(service);
  }
  delete(id: number): boolean {
    return this.serviceRepository.delete(id);
  }
  filterBy(type: string): Service[] {
    return this.serviceRepository.filterBy(type);
  }
}
