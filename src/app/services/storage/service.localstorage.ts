import { Injectable } from '@angular/core';
import { ServiceRepository } from 'src/app/usecases/repository/service.repository';
import { Service } from 'src/app/entities/service.entity';

@Injectable({
  providedIn: 'root'
})
export class ServiceLocalStorage implements ServiceRepository {
  private readonly modelKey = 'services';
  constructor() { }

  create(service: Service): Service {
    const arrayServices = this.getDataService();
    const numberdecimal = Math.random().toString();
    // tslint:disable-next-line: radix
    service.id = parseInt(numberdecimal.split('.')[1]);
    arrayServices.push(service);
    localStorage.setItem(this.modelKey, JSON.stringify(arrayServices));
    return service;
  }

  update(id: number, service: Service): Service {
    const arrayServices = this.getDataService();
    const index = arrayServices.findIndex(e => e.id === id);
    arrayServices[index] = service;
    localStorage.setItem(this.modelKey, JSON.stringify(arrayServices));
    return service;
  }

  delete(id: number): boolean {
    const arrayServices = this.getDataService();
    let result = false;
    const newArrayServices = arrayServices.filter(s => s.id !== id);
    localStorage.setItem(this.modelKey, JSON.stringify(newArrayServices));
    result = true;
    return result;
  }

  filterBy(type: string): Service[] {
    const arrayServices = this.getDataService();
    if (type === 'Todos') { return arrayServices; }
    return arrayServices.filter(s => s.type === type);
  }

  private getDataService(): Service[] {
    let arrayServices = new Array<Service>();
    const dataInLocalStorage = localStorage.getItem(this.modelKey);
    if (dataInLocalStorage !== null) {
      arrayServices = JSON.parse(dataInLocalStorage);
    }
    return arrayServices;
  }
}
