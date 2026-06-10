import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { TrustStripComponent } from '../../components/trust-strip/trust-strip.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { WhoForComponent } from '../../components/who-for/who-for.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { WhySectionComponent } from '../../components/why-section/why-section.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CtaBannerComponent } from '../../components/cta-banner/cta-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    TrustStripComponent,
    FeaturesComponent,
    StatsComponent,
    WhoForComponent,
    HowItWorksComponent,
    WhySectionComponent,
    PricingComponent,
    TestimonialsComponent,
    CtaBannerComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
