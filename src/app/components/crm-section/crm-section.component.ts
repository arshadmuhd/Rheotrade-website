import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-crm-section',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './crm-section.component.html',
  styleUrl: './crm-section.component.scss'
})
export class CrmSectionComponent {
  constructor(public modal: ModalService) {}

  pillars = [
    {
      icon: '🎯',
      color: 'var(--sky)',
      accent: 'var(--primary)',
      title: 'Dynamic Pipelines',
      body: 'Design your own sales process — no code, no consultant. Create stages, set colours, assign probabilities, and build Kanban boards that match how your team actually sells.',
      features: [
        'Drag-and-drop stage builder',
        'Multiple pipelines (Sales, Support, Custom)',
        'Custom fields per lead or deal',
        'Probability % per stage',
        'Team-based deal ownership',
      ]
    },
    {
      icon: '📲',
      color: 'var(--mint)',
      accent: 'var(--mint-ink)',
      title: 'Multi-Channel Leads',
      body: 'Leads from WhatsApp, Meta Ads, Google Ads, and your website all flow into one unified inbox — automatically tagged by source, so you know what\'s converting.',
      features: [
        'WhatsApp Business API (2-way messaging)',
        'Meta Lead Ads webhook (FB + Instagram)',
        'Google Lead Form extensions',
        'Embedded web forms',
        'Manual entry with full history',
      ]
    },
    {
      icon: '⚡',
      color: 'var(--lilac)',
      accent: 'var(--lilac-ink)',
      title: 'Won Deal → Sales Order',
      body: 'Mark a deal Won and Rheotrade instantly creates the customer record and a pre-filled Sales Order — no re-keying, no copy-paste, no gap between CRM and ERP.',
      features: [
        'Auto-create or link existing customer',
        'Spawn Quotation or Sales Order instantly',
        'Carry deal value, currency, salesperson',
        'Full traceability: lead → deal → invoice',
        'GST / VAT applied from the first line',
      ]
    },
  ];

  channels = [
    { icon: '💬', bg: '#d1fae5', ink: '#065f46', name: 'WhatsApp Business', desc: 'Incoming messages create leads instantly. Reply with approved templates right from your CRM. Highest value channel in India & GCC.', badge: 'Priority', badgeBg: '#d1fae5', badgeInk: '#065f46' },
    { icon: '📣', bg: 'var(--sky)', ink: 'var(--sky-ink)', name: 'Meta Lead Ads (FB + Instagram)', desc: 'Lead form submissions from Facebook and Instagram ads arrive in real time via webhook — no manual exports.', badge: 'Webhook', badgeBg: 'var(--sky)', badgeInk: 'var(--sky-ink)' },
    { icon: '🔍', bg: 'var(--peach)', ink: 'var(--peach-ink)', name: 'Google Lead Form Ads', desc: 'Google Ads lead form extensions push directly into Rheotrade CRM the moment someone clicks your ad.', badge: 'API', badgeBg: 'var(--peach)', badgeInk: 'var(--peach-ink)' },
    { icon: '🌐', bg: 'var(--lilac)', ink: 'var(--lilac-ink)', name: 'Web Forms', desc: 'Embed a Rheotrade lead form on your website. Each submission becomes a lead with full source tracking.', badge: 'Embed', badgeBg: 'var(--lilac)', badgeInk: 'var(--lilac-ink)' },
  ];

  funnelSteps = [
    { icon: '📲', bg: 'var(--sky)',   title: 'Lead Captured',  body: 'WhatsApp, Meta, Google, or your website form' },
    { icon: '🗂️', bg: 'var(--peach)', title: 'Nurtured in CRM', body: 'Pipeline board, activities, WhatsApp follow-ups' },
    { icon: '🤝', bg: 'var(--lilac)', title: 'Deal Won',        body: 'Stage moved to Won — ERP seam fires instantly' },
    { icon: '🧾', bg: 'var(--mint)',  title: 'Sales Order',     body: 'Pre-filled from deal: customer, value, currency' },
    { icon: '📄', bg: '#fef3c7',      title: 'Invoice Sent',    body: 'GST / VAT calculated, PDF dispatched to customer' },
    { icon: '✅', bg: '#d1fae5',      title: 'Payment & Books', body: 'Receipt posted, accounts updated, reports live' },
  ];

  featureCards = [
    { icon: '🏷️', bg: 'var(--sky)',   title: 'Kanban Board',       body: 'Drag deals across stages. Visual pipeline with colour-coded columns and deal values at a glance.' },
    { icon: '🛠️', bg: 'var(--mint)',  title: 'Custom Fields',      body: 'Add text, number, date, dropdown, or checkbox fields to leads and deals — no code needed.' },
    { icon: '📅', bg: 'var(--lilac)', title: 'Activity Timeline',   body: 'Calls, emails, meetings, WhatsApp messages — every touchpoint logged with due dates and notes.' },
    { icon: '📊', bg: 'var(--peach)', title: 'Funnel Analytics',    body: 'Conversion rates by stage, leads by source, source ROI — which channel is actually making you money.' },
    { icon: '👥', bg: 'var(--rose)',  title: 'Team Performance',    body: 'Salesperson scoreboards, activities due vs. overdue, quota tracking per rep and team.' },
    { icon: '🌐', bg: '#fef3c7',      title: 'Arabic + English',    body: 'Full RTL support in CRM too — switch languages globally, names render in the right script.' },
  ];

  kanbanDeals = [
    { col: 'New',      colClass: 'new',  name: 'Ravi Textiles',    val: '₹1.8L',      tag: 'WhatsApp', tagClass: 'wa'   },
    { col: 'New',      colClass: 'new',  name: 'Gulf Traders LLC', val: 'AED 22,000', tag: 'Meta Ad',  tagClass: 'meta' },
    { col: 'Qualified',colClass: 'qual', name: 'Priya Electronics',val: '₹3.2L',      tag: 'Web Form', tagClass: 'web'  },
    { col: 'Proposal', colClass: 'prop', name: 'Al-Noor Supplies', val: 'AED 48,000', tag: 'Meta Ad',  tagClass: 'meta' },
    { col: 'Proposal', colClass: 'prop', name: 'Mehta & Sons',     val: '₹6.4L',      tag: 'WhatsApp', tagClass: 'wa'   },
    { col: 'Won ✓',    colClass: 'won',  name: 'Sharma Pharma',    val: '₹9.1L',      tag: '→ Sales Order', tagClass: 'won-tag' },
  ];

  get kanbanCols() {
    const cols = ['New', 'Qualified', 'Proposal', 'Won ✓'];
    return cols.map(col => ({
      name: col,
      cls: this.kanbanDeals.find(d => d.col === col)?.colClass ?? '',
      deals: this.kanbanDeals.filter(d => d.col === col)
    }));
  }
}
