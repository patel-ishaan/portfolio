import { Component } from '@angular/core';
import { CAPABILITIES } from '../../data/portfolio';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-capabilities',
  imports: [Reveal],
  templateUrl: './capabilities.html',
  styleUrl: './capabilities.css',
})
export class Capabilities {
  protected readonly capabilities = CAPABILITIES;

  protected readonly flow = [
    { label: 'Brief', detail: 'one sentence in' },
    { label: 'Router', detail: 'splits the work' },
    { label: 'Venue agent', detail: 'Tavily search' },
    { label: 'Flight agent', detail: 'Kiwi MCP' },
    { label: 'Playlist agent', detail: 'YouTube Music' },
    { label: 'Guard', detail: 'prompt-injection check' },
  ];

  protected readonly layers = [
    { label: 'Angular', detail: 'the screen' },
    { label: 'REST API', detail: 'Spring Boot endpoints' },
    { label: 'Spring Security', detail: 'roles and access' },
    { label: 'JPA / Hibernate', detail: 'persistence' },
    { label: 'MySQL', detail: 'the record' },
  ];
}
