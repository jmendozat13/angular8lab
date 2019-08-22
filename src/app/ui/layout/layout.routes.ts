import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LayoutRoutes: Route[] = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'services',
            loadChildren: () =>
                import('../layout/services/services.module').then(
                    m => m.ServicesModule
                )
        },
        {
            path: 'services/:type',
            loadChildren: () =>
                import('../layout/services/services.module').then(
                    m => m.ServicesModule
                )
        },
    ]
}
];
