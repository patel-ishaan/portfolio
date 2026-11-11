import { Component } from '@angular/core';
import { SITE } from '../../data/portfolio';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly resume = SITE.resume;
}
