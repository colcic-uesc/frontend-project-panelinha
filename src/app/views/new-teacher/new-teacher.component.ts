import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-teacher',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './new-teacher.component.html',
  styleUrl: './new-teacher.component.css'
})
export class NewTeacherComponent {

  constructor(private router: Router) { }

  cancel() {
    this.router.navigate(['/teachers']);
  }
}
