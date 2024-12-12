import { Component } from '@angular/core';
import { DashboardCardComponent } from "../../components/dashboard-card/dashboard-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
