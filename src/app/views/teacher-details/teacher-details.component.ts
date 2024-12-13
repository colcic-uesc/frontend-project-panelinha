import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../services/teacher/teacher.service';
import { ButtonComponent } from "../../components/button/button.component";
import { Teacher } from '../../types/models';

@Component({
  selector: 'app-teacher-details',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css'
})
export class TeacherDetailsComponent {
  teacher: Teacher | null = null;

  constructor(
    private route: ActivatedRoute,
    private teacherService: TeacherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.teacherService.getTeacherById(id).subscribe({
        next: (data) => this.teacher = data,
        error: () => alert('Erro ao buscar os detalhes do professor.')
      });
    }
  }

  navigateBack() {
    this.router.navigate(['/teachers']);
  }

  editTeacher() {
    if (this.teacher?.id) {
      this.router.navigate([`/teachers/${this.teacher.id}/edit`]);
    }
  }

  deleteTeacher() {
    if (this.teacher?.id && confirm('Deseja realmente excluir este professor?')) {
      this.teacherService.deleteTeacher(this.teacher.id).subscribe({
        next: () => {
          alert('Professor excluído com sucesso.');
          this.router.navigate(['/teachers']);
        },
        error: () => alert('Erro ao excluir o professor.')
      });
    }
  }
}
