import { LayoutRoutes } from './ui/layout/layout.routes';
import { Routes } from '@angular/router';
import { NoPageRoutes } from './ui/no-page/no-page.routes';

export const routes: Routes = [...LayoutRoutes, ...NoPageRoutes];
