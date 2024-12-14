import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from '../../services/teacher/teacher.service';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonComponent],
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.css'
})
export class EditTeacherComponent {
  teacherForm!: FormGroup;
  teacherId!: number;
  areaOptions = [
    { value: 'ensino', label: 'Ensino' },
    { value: 'pesquisa', label: 'Pesquisa' },
    { value: 'extensao', label: 'Extensão' }
  ];


  constructor(
    private fb: FormBuilder,
    private teacherService: TeacherService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.teacherId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.loadTeacherData();
  }

  initForm() {
    this.teacherForm = this.fb.group({
      name: ['tewstre', [Validators.required, Validators.minLength(3)]],
      email: ['teste@gmail.com', [Validators.required, Validators.email]],
      phone: ['(75) 99192-2151', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{5}-\d{4}$/)]],
      department: ['DCET', Validators.required],
      vinculo: ['efetivo', Validators.required],
      areas: this.fb.array([], Validators.required),
      bio: ['AAAAAAaaaaaaaaaaaaaaAAA', [Validators.required, Validators.minLength(10)]]
    });
  }

  loadTeacherData() {
    this.teacherService.getTeacherById(this.teacherId).subscribe(data => {
      this.teacherForm.patchValue(data);

      /* const phone = this.teacherForm.get('phone')?.value;
      if (phone) {
        this.teacherForm.get('phone')?.setValue(this.formatPhone(phone), { emitEvent: false });
      } */
    });
  }

  formatPhone(event: any) {
    /* let input = event.target.value.replace(/\D/g, ''); */
    let input = event.target.value || event;
    let value = input.replace(/\D/g, '');
    let formatted = '';

    if (value.length > 0) {
      formatted += '(' + value.substring(0, 2);
      if (value.length > 2) {
        formatted += ') ' + value.substring(2, 7);
        if (value.length > 7) {
          formatted += '-' + value.substring(7, 11);
        }
      }
    }

    this.teacherForm.get('phone')?.setValue(formatted, { emitEvent: false });
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      this.teacherService.updateTeacher({ ...this.teacherForm.value, id: this.teacherId }).subscribe(() => {
        alert('Professor atualizado com sucesso.');
        this.router.navigate(['/teachers']);
      });
    } else {
      this.markFormAsTouched(this.teacherForm);
    }
  }

  markFormAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormAsTouched(control);
      }
    });
  }

  onAreaChange(event: any, value: string) {
    const areas = this.teacherForm.get('areas') as FormArray;
    if (event.target.checked) {
      areas.push(this.fb.control(value));
    } else {
      const index = areas.controls.findIndex(control => control.value === value);
      if (index >= 0) {
        areas.removeAt(index);
      }
    }
  }

  isChecked(value: string): boolean {
    const areas = this.teacherForm.get('areas') as FormArray;
    return areas.value.includes(value);
  }

  cancel() {
    this.router.navigate(['/teachers']);
  }

  get form() { return this.teacherForm.controls; }

}
