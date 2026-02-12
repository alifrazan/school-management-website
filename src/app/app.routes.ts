import { Routes } from '@angular/router';
import { PortofolioWeb } from '@template/portofolio-web/portofolio-web';
import { NotFound } from './pages/not-found/not-found';
import { Admin } from './pages/template/admin/admin';
import { Login } from './pages/login/login';


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
    { path: '', component: PortofolioWeb, title: 'Portofolio Web' },
    { path: 'admin', component: Admin, title:'Portofolio Web | Admin' },
    {
        path: 'login',
        component: Login,
        title: 'Portofolio Web | Admin'
        // loadComponent: () => import('./pages/login/login'),
    },
    { path: '**', component: NotFound },

];
