import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Stat { target: number; suffix: string; label: string; prefix?: string; displayed: string; }

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent implements OnInit {
  stats: Stat[] = [
    { target: 7,   suffix: '',   prefix: '',  label: 'Countries supported',      displayed: '0' },
    { target: 500, suffix: '+',  prefix: '',  label: 'Businesses onboarded',     displayed: '0' },
    { target: 200, suffix: 'Cr+',prefix: '₹', label: 'Transactions processed',   displayed: '0' },
    { target: 99,  suffix: '.9%',prefix: '',  label: 'Uptime SLA',               displayed: '0' },
  ];

  private observer!: IntersectionObserver;
  private animated = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !this.animated) {
        this.animated = true;
        this.animateAll();
      }
    }, { threshold: 0.3 });
    this.observer.observe(this.el.nativeElement);
  }

  private animateAll() {
    this.stats.forEach(s => this.countUp(s));
  }

  private countUp(stat: Stat) {
    const duration = 1800;
    const steps = 60;
    const inc = stat.target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(inc * step), stat.target);
      stat.displayed = (stat.prefix || '') + current + stat.suffix;
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  }
}
