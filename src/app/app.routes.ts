import { Routes } from '@angular/router';
import { PartageComponent } from './pages/partage/partage.component';
import { MeteoComponent } from './pages/meteo/meteo.component';

export const routes: Routes = [
  { path: 'partage', component: PartageComponent },
  { path: 'meteo', component: MeteoComponent },
  { path: '', redirectTo: 'meteo', pathMatch: 'full' },
  { path: '**', redirectTo: 'meteo' },
];
