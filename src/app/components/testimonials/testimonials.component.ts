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
  testimonials = [
    { initial: 'R', color: '#3b82f6', quote: '"We used to spend 3 days closing the month. With Rheotrade, it\'s done in 4 hours. The GST reconciliation alone saved us ₹40,000 in accountant fees."', name: 'Rajesh Kumar', role: 'Director · Kumar Trading Co., Mumbai' },
    { initial: 'A', color: '#1f9d63', quote: '"Managing our Dubai and Bahrain entities together was a nightmare. Rheotrade handles the VAT, the AED/BHD conversions, and the consolidated P&L seamlessly."', name: 'Ahmed Al Mansouri', role: 'CFO · Al Noor Group, Dubai' },
    { initial: 'P', color: '#7c5cdb', quote: '"The batch and expiry tracking is exactly what pharma distribution needs. We can see slow-moving stock and near-expiry items instantly — before they become write-offs."', name: 'Priya Nair', role: 'Operations Head · MediLine Pharma, Chennai' },
  ];
}
