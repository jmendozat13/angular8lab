import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';
import { ServicesRoutes } from './services.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [ServicesComponent],
  exports: [ServicesComponent],
  imports: [
    RouterModule.forChild(ServicesRoutes),
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
})
export class ServicesModule { }
