import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FiltersModule } from './filters/filters.module';
import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    FiltersModule,
    ServicesModule
  ],
  exports: [LayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutModule { }
