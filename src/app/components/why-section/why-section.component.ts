import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-why-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './why-section.component.html',
  styleUrl: './why-section.component.scss'
})
export class WhySectionComponent {
  reasons = [
    { n: '01', title: 'Accurate by default',          body: 'Every sale, purchase, and payment auto-posts to the ledger. Reconciliation happens in the background — not at month-end panic.' },
    { n: '02', title: 'Compliant out of the box',     body: 'India GST and GCC VAT are not bolt-ons — they\'re native. Tax codes, return filing, and ITC reconciliation are built in from day one.' },
    { n: '03', title: 'Grows with you',               body: 'Start solo. Add branches, currencies, and entities as you grow — no migration, no new software, no consultants.' },
    { n: '04', title: 'Built for your region',        body: 'India and the GCC have unique accounting rules and tax regimes. Rheotrade was built for them, not adapted for them.' },
    { n: '05', title: 'No hidden implementation cost',body: 'Cloud-native, self-service setup. No consultant fees, no data migration contracts. A subscription that pays for itself in week one.' },
    { n: '06', title: 'Arabic RTL, first class',      body: 'Full right-to-left interface for Arabic users — not just mirrored CSS. Your team works in the language they think in.' },
  ];
}
