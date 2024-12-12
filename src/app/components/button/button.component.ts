import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label: string = 'Botão';
  @Input() type: string = 'button';
  @Input() theme: 'default' | 'btn-active' | 'btn-view' | 'btn-delete' = 'default';
  @Input() disabled: boolean = false;
}