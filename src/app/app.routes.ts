import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FeelingsComponent } from './pages/feelings/feelings.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'feelings', component: FeelingsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
