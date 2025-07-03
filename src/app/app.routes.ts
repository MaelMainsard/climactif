import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeelingsComponent } from './pages/feelings/feelings.component';

export const routes: Routes = [
  { path: 'partage', component: HomeComponent },
  { path: 'meteo', component: FeelingsComponent },
  { path: '', redirectTo: 'meteo', pathMatch: 'full' },
  { path: '**', redirectTo: 'meteo' },
];
