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
    service.id = arrayServices.length + 1;
    arrayServices.push(service);
    localStorage.setItem(this.modelKey, JSON.stringify(arrayServices));
    return service;
  }

  update(id: number, service: Service): Service {
    const arrayServices = this.getDataService();
    let serviceupdate: Service;
    arrayServices.forEach(serviceitem => {
      if (serviceitem.id === id) {
        serviceitem.name = service.name;
        service.description = service.description;
        serviceupdate = serviceitem;
      }
    });
    return serviceupdate;
  }
  delete(id: number): boolean {
    const arrayServices = this.getDataService();
    let result = false;
    const removeIndex = arrayServices.map((item) => item.id).indexOf(id);
    localStorage.setItem(this.modelKey, JSON.stringify(removeIndex));
    result = true;
    return result;
  }

  filterBy(type: string): Service[] {
    const arrayServices = this.getDataService();
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
