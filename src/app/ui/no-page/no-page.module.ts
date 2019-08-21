import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './no-page.component';



@NgModule({
  declarations: [NoPageComponent],
  imports: [
    CommonModule
  ],
  exports: [NoPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NoPageModule { }
