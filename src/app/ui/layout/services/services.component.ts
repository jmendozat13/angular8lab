import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceUseCase } from 'src/app/usecases/usecase/service.usecase';
import { Service } from 'src/app/entities/service.entity';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {
  services: Service[];
  serviceForm: FormGroup;
  navigationSubscription: any;
  typefilter: string;
  constructor(
    private formBuilder: FormBuilder,
    private readonly serviceUseCase: ServiceUseCase,
    private router: Router,
    private route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.filterServices();
      }
    });
  }

  ngOnInit() {
    this.serviceForm = this.formBuilder.group({
      id: new FormControl(''),
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(800)]],
      type: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const id = this.serviceForm.controls.id.value === '' ? 0 : this.serviceForm.controls.id.value;
    const service = new Service(id,
      this.serviceForm.controls.name.value,
      this.serviceForm.controls.description.value,
      this.serviceForm.controls.type.value);
    if (service.isValid()) {
      this.save(service);
    } else {
      alert('Completar los todos los datos requeridos');
    }
  }

  save(service: Service) {
    this.serviceUseCase.save(service);
    this.serviceForm.reset();
    this.services = this.serviceUseCase.filterBy(this.typefilter);
  }

  cancel() {
    this.serviceForm.reset();
  }

  filterServices() {
    this.typefilter = this.route.snapshot.paramMap.get('type');
    this.services = this.serviceUseCase.filterBy(this.typefilter);
  }

  editService(service: Service) {
    this.serviceForm.setValue({
      id: service.id,
      name: service.name,
      description: service.description,
      type: service.type
    });
  }

  deleteService(service: Service) {
    const resultado = this.serviceUseCase.delete(service.id);
    if (resultado) {
      this.services = this.serviceUseCase.filterBy(this.typefilter);
    } else { alert('No se pudo eliminar el servicio.'); }
  }

  ngOnDestroy(): void {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
