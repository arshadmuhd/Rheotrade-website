import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-strip',
  standalone: true,
  templateUrl: './trust-strip.component.html',
  styleUrl: './trust-strip.component.scss'
})
export class TrustStripComponent {
  countries = [
    { flag: '🇮🇳', name: 'India' },
    { flag: '🇦🇪', name: 'UAE' },
    { flag: '🇸🇦', name: 'Saudi Arabia' },
    { flag: '🇧🇭', name: 'Bahrain' },
    { flag: '🇴🇲', name: 'Oman' },
    { flag: '🇰🇼', name: 'Kuwait' },
    { flag: '🇶🇦', name: 'Qatar' },
  ];
}
