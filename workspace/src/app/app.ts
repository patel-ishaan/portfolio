import { Component } from '@angular/core';
import { About } from './components/about/about';
import { Capabilities } from './components/capabilities/capabilities';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { SiteFooter } from './components/site-footer/site-footer';
import { StackBand } from './components/stack-band/stack-band';
import { Work } from './components/work/work';

@Component({
  selector: 'app-root',
  imports: [
    Hero,
    Work,
    Experience,
    Capabilities,
    About,
    StackBand,
    Contact,
    SiteFooter,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
