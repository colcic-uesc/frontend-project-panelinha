import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../components/button/button.component";
import { TeacherService } from '../../services/teacher/teacher.service';

@Component({
  selector: 'app-new-teacher',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './new-teacher.component.html',
  styleUrl: './new-teacher.component.css'
})
export class NewTeacherComponent {
  teacherForm!: FormGroup;
  departments = [
    { value: 'DCET', label: 'DCET' },
    { value: 'DFCH', label: 'DFCH' },
    { value: 'DLA', label: 'DLA' }
  ];

  constructor(
    private teacherService: TeacherService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.teacherForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^\(\d{2}\)\s*\d{4,5}-?\d{4}$/)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],
      department: ['', Validators.required],
      vinculo: ['', Validators.required],
      areas: this.fb.array([], Validators.required),
      bio: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  formatPhone(event: any) {
    let input = event.target.value.replace(/\D/g, '');
    let formatted = '';

    if (input.length > 0) {
      formatted += '(' + input.substring(0, 2);
      if (input.length > 2) {
        formatted += ') ' + input.substring(2, 7);
        if (input.length > 7) {
          formatted += '-' + input.substring(7, 11);
        }
      }
    }

    this.teacherForm.get('phone')?.setValue(formatted, { emitEvent: false });
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      this.teacherService.addTeacher(this.teacherForm.value).subscribe(() => {
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

  get form() { return this.teacherForm.controls; }

  onAreaChange(event: any) {
    const areas = this.teacherForm.get('areas') as FormArray;
    if (event.target.checked) {
      areas.push(this.fb.control(event.target.value));
    } else {
      const index = areas.controls.findIndex(x => x.value === event.target.value);
      if (index >= 0) {
        areas.removeAt(index);
      }
    }
  }

  cancel() {
    this.router.navigate(['/teachers']);
  }
}
