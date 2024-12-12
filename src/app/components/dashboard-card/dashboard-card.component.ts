import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {
  @Input() title: string = 'Título';
  @Input() description: string = 'Descrição do card';
  @Input() link: string = '#';

  constructor(private router: Router) { }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
