import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TeachersComponent } from './views/teachers/teachers.component';
import { NewTeacherComponent } from './views/new-teacher/new-teacher.component';
import { TeacherDetailsComponent } from './views/teacher-details/teacher-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/new', component: NewTeacherComponent },
  { path: 'teachers/:id', component: TeacherDetailsComponent },
];
