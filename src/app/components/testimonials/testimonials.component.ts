import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  promises = [
    {
      icon: '📒',
      color: 'var(--sky)',
      inkColor: 'var(--sky-ink)',
      headline: 'Always-accurate books.',
      quote: 'Your accounts will be up to date every single day — without a single manual journal entry, ever.',
      tag: 'Accounting'
    },
    {
      icon: '🏛️',
      color: 'var(--mint)',
      inkColor: 'var(--mint-ink)',
      headline: 'Tax that just works.',
      quote: 'File your GST or VAT return without opening a spreadsheet. Compliance is built in, not bolted on.',
      tag: 'GST & VAT'
    },
    {
      icon: '⚡',
      color: 'var(--lilac)',
      inkColor: 'var(--lilac-ink)',
      headline: 'Live on day one.',
      quote: 'Go from sign-up to your first invoice in under 10 minutes. No consultant, no data migration, no waiting.',
      tag: 'Onboarding'
    },
  ];
}
