import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'Título';
  @Input() info: string = 'Informações';
  @Input() email: string = 'E-mail';
  @Input() id!: number;
  @Output() delete = new EventEmitter<number>();

  constructor(
    private router: Router
  ) { }

  navigate(link: string) {
    this.router.navigate([link]);
  }

  deleteTeacher() {
    this.delete.emit(this.id);
  }

}
