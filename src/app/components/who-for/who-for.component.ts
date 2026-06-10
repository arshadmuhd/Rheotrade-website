import { Component, inject } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-who-for',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './who-for.component.html',
  styleUrl: './who-for.component.scss'
})
export class WhoForComponent {
  modal = inject(ModalService);

  segments = [
    { icon: '🛒', color: 'var(--sky)',   title: 'Trading & Distribution',   body: 'High-volume buy-sell with tight margins? Track every purchase, sale, and margin in real time.' },
    { icon: '💊', color: 'var(--mint)',  title: 'Pharma & Food',             body: 'Batch, expiry, FIFO/FEFO — all built in. Stay compliant without custom development.' },
    { icon: '🏪', color: 'var(--peach)', title: 'Retail & Multi-Branch',     body: 'Manage stock across branches, consolidate financials, and file GST/VAT from one screen.' },
    { icon: '🏗️', color: 'var(--lilac)', title: 'Groups & Holding Companies', body: 'Multiple entities, one dashboard. Intercompany eliminations and group P&L in seconds.' },
  ];
}
