import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  steps = [
    { n: '1', title: 'Create your account',       body: 'Sign up in under 2 minutes. Your workspace is ready instantly — no IT setup, no waiting.' },
    { n: '2', title: 'Configure your business',   body: 'Add your company, set your currency, enable GST or VAT, import opening balances. Done.' },
    { n: '3', title: 'Start trading',             body: 'Create your first invoice, raise a PO, track your stock. Accounts post automatically as you work.' },
  ];
}
