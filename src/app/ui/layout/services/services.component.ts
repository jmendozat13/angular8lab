import { Component, OnInit } from '@angular/core';
import { ServiceUseCase } from 'src/app/usecases/usecase/service.usecase';
import { Service } from 'src/app/entities/service.entity';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services: Service[];
  constructor(private readonly serviceUseCase: ServiceUseCase) { }

  ngOnInit() {
    this.filterServices();
  }

  filterServices() {

  }


}
