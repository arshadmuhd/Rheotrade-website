import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {
  features = [
    { icon: '📊', color: 'var(--sky)',   title: 'Accounts & Ledger',       body: 'Full double-entry accounting with real-time P&L, balance sheet, and cash flow. Every transaction auto-posts — zero manual entry.' },
    { icon: '🧾', color: 'var(--mint)',  title: 'Sales & Invoicing',       body: 'Create GST/VAT invoices in seconds. Manage credit limits, aged debtors, and collections from one place. Auto-reconcile payments.' },
    { icon: '🛒', color: 'var(--peach)', title: 'Purchase & Payables',     body: 'Purchase orders, GRN, supplier invoices and payments — fully tracked. Three-way matching catches discrepancies before they cost you.' },
    { icon: '📦', color: 'var(--lilac)', title: 'Inventory Management',    body: 'Batch tracking, expiry dates, multi-warehouse, FIFO/FEFO costing. Built for pharma, food, and trading companies with complex stock needs.' },
    { icon: '🏛️', color: 'var(--rose)',  title: 'GST & VAT Built In',      body: 'India GST (GSTR-1, 2A, 3B, e-way) and GCC VAT handled natively. File returns directly, reconcile ITC automatically. No add-on needed.' },
    { icon: '🌐', color: 'var(--sky)',   title: 'Multi-Currency & RTL',    body: 'Transact in INR, AED, SAR, USD and more. Full Arabic RTL interface. Exchange rate management and revaluation built in.' },
    { icon: '🏢', color: 'var(--mint)',  title: 'Multi-Company',           body: 'Manage multiple companies, branches, or cost centres under one login. Consolidated reports at group level in one click.' },
    { icon: '📈', color: 'var(--peach)', title: 'Live Business Insights',   body: 'Real-time dashboards show your revenue, profit, and cash position as it happens — not at month end. Make decisions on live numbers.' },
    { icon: '🌍', color: 'var(--lilac)', title: 'India + GCC, One Platform', body: 'The only platform built natively for both markets. Switch between INR and AED books, entities, and compliance rules — from a single login.' },
  ];
}
