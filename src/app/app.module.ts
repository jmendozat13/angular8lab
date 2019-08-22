import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './ui/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { NoPageModule } from './ui/no-page/no-page.module';
import { ServiceRepository } from './usecases/repository/service.repository';
import { ServiceLocalStorage } from './services/storage/service.localstorage';
import { ComponentsModule } from './ui/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    NoPageModule,
    ComponentsModule
  ],
  providers: [{ provide: ServiceRepository, useClass: ServiceLocalStorage }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
