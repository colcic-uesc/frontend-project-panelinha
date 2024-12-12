import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [ButtonComponent, CardComponent, RouterLink],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {

}
