import { Component } from '@angular/core';
import { SITE } from '../../data/portfolio';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly email = SITE.email;
  protected readonly phone = SITE.phone;
  protected readonly phoneHref = SITE.phoneHref;
  protected readonly linkedin = SITE.linkedin;
  protected readonly github = SITE.github;
  protected readonly resume = SITE.resume;

  protected readonly mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
    'Hello Ishaan – role or project',
  )}`;
}
