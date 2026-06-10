import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-launch-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './launch-modal.component.html',
  styleUrl: './launch-modal.component.scss'
})
export class LaunchModalComponent {
  modal = inject(ModalService);
  email = signal('');
  submitted = signal(false);
  loading = signal(false);

  onOverlayClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) this.modal.close();
  }

  async submit() {
    if (!this.email()) return;
    this.loading.set(true);
    await new Promise(r => setTimeout(r, 800));
    this.loading.set(false);
    this.submitted.set(true);
  }
}
