import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.page').then( m => m.ServicesPage)
  },
];
