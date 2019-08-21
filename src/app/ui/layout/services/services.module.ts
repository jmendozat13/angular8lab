import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RouterModule } from '@angular/router';
import { ServicesRoutes } from './services.routes';



@NgModule({
  declarations: [ServicesComponent],
  exports: [ServicesComponent],
  imports: [
    RouterModule.forChild(ServicesRoutes),
    CommonModule
  ]
})
export class ServicesModule { }
