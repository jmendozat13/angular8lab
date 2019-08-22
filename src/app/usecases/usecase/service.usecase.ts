import { Injectable } from '@angular/core';
import { Service } from 'src/app/entities/service.entity';
import { ServiceRepository } from '../repository/service.repository';

@Injectable({
  providedIn: 'root'
})
export class ServiceUseCase {

  constructor(private readonly serviceRepository: ServiceRepository) { }

  save(service: Service): Service {
    if (service.id !== 0 && service.id !== null) {
      return this.serviceRepository.update(service.id, service);
    }
    return this.serviceRepository.create(service);
  }
  delete(id: number): boolean {
    return this.serviceRepository.delete(id);
  }
  filterBy(type: string): Service[] {
    return this.serviceRepository.filterBy(type);
  }
}
