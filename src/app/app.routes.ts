import { Routes } from '@angular/router';
import { PortofolioWeb } from '@template/portofolio-web/portofolio-web';
import { NotFound } from './pages/not-found/not-found';
import { Admin } from './pages/template/admin/admin';


/**
 * Eagerly loaded components
 * When you define a route with the component property, 
 * the referenced component is eagerly loaded as part of the same JavaScript bundle 
 * as the route configuration.
 * Example: { path: '', component: PortofolioWeb },
 */

/**
 * Lazily Load
 * You can use the loadComponent property to lazily load the JavaScript
 * for a component at the point at which that route would become active. 
 * The loadChildren property lazily loads child routes during route matching.
 */

export const routes: Routes = [
    { path: '', component: PortofolioWeb, title: 'School Management System' },
    { path: 'admin', component: Admin, title:'Admin | School Management System' },
    { path: 'login', title: 'Login | School Management System', loadComponent: () => import('./pages/login/login').then(m => m.Login) },
    { path: '**', component: NotFound },
];
