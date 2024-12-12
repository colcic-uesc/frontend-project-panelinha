import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TeachersComponent } from './views/teachers/teachers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teachers', component: TeachersComponent },
];
