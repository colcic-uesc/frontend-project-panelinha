import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {

}
