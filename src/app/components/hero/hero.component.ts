import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  modal = inject(ModalService);

  bars = [55, 40, 68, 48, 72, 60, 90, 75, 82, 100];
}
