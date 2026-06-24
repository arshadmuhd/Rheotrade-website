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
    { n: '01', title: 'Everything connected',          body: 'Every sale, purchase, and stock movement flows into your accounts automatically. One entry, zero duplication — your books are always up to date.' },
    { n: '02', title: 'Tax built in, not bolted on',  body: 'India GST and GCC VAT are woven into every transaction from the start. No add-ons, no manual tax entries — it just works, everywhere you operate.' },
    { n: '03', title: 'Grows with your business',     body: 'Start as a single company. Add branches, currencies, and new markets as you expand — without switching software or migrating data.' },
    { n: '04', title: 'Made for India & the GCC',     body: 'Rheotrade understands your markets — the currencies, the tax regimes, the languages, and how trading businesses actually work in this region.' },
    { n: '05', title: 'Up and running in minutes',    body: 'Sign up, configure your company, and start trading on day one. No IT team, no consultant, no six-month rollout. Just your business, live instantly.' },
    { n: '06', title: 'Arabic & English, natively',   body: 'A true bilingual platform — switch between full Arabic RTL and English LTR at any time. Every screen, every report, every invoice.' },
  ];
}
