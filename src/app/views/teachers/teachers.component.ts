import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from "../../components/card/card.component";
import { TeacherService } from '../../services/teacher/teacher.service';
import { Teacher } from '../../types/models';

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  teachers: Teacher[] = [];

  constructor(
    private teacherService: TeacherService,
  ) { }

  ngOnInit() {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  deleteTeacher(id: number) {
    console.log('Teacher deleted');
    this.teacherService.deleteTeacher(id).subscribe(() => {
      this.teachers = this.teachers.filter(teacher => teacher.id !== id);
    });
  }

}
