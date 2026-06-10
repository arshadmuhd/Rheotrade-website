import { Component, inject, signal } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  modal = inject(ModalService);
  annual = signal(false);

  plans = [
    {
      id: 'starter', name: 'Starter', color: 'var(--sky-ink)',
      monthlyPrice: 2999, annualPrice: 2399,
      cycle: 'Per company · up to 3 users', featured: false,
      features: ['Accounts & ledger', 'Sales & invoicing', 'Purchase & payables', 'Basic inventory', 'GST / VAT filing', '1 company · 1 currency', 'Email support'],
      cta: 'Start free trial'
    },
    {
      id: 'growth', name: 'Growth', color: '#fff',
      monthlyPrice: 7999, annualPrice: 6399,
      cycle: 'Per company · up to 10 users', featured: true,
      features: ['Everything in Starter', 'Batch & expiry tracking', 'Multi-warehouse', 'Multi-currency', 'Approval workflows', 'Multi-branch reports', 'Priority support'],
      cta: 'Start free trial'
    },
    {
      id: 'enterprise', name: 'Enterprise', color: 'var(--lilac-ink)',
      monthlyPrice: null, annualPrice: null,
      cycle: 'Unlimited users · unlimited entities', featured: false,
      features: ['Everything in Growth', 'Multi-company consolidation', 'Custom workflows', 'Dedicated onboarding', 'SLA guarantee', 'API access', 'Custom integrations'],
      cta: 'Contact us'
    }
  ];

  price(plan: typeof this.plans[0]) {
    if (!plan.monthlyPrice) return 'Custom';
    const p = this.annual() ? plan.annualPrice! : plan.monthlyPrice;
    return '₹' + p.toLocaleString('en-IN');
  }
}
