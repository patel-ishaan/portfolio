import { Component, computed, signal } from '@angular/core';
import { AudienceMode, SITE } from '../../data/portfolio';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-hero',
  imports: [Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly mode = signal<AudienceMode>('hiring');
  protected readonly email = SITE.email;
  protected readonly resume = SITE.resume;

  protected readonly statement = computed(() =>
    this.mode() === 'hiring'
      ? 'I build agentic AI systems and the full-stack products around them. I am a software engineer at Capgemini, open to AI roles in India or remote.'
      : 'I take an AI idea from a working prototype to a product people can use: the agents, the API and the Angular screen.',
  );

  protected readonly primaryLabel = computed(() =>
    this.mode() === 'hiring' ? 'Email about a role' : 'Email a brief',
  );

  protected readonly mailto = computed(() => {
    const subject =
      this.mode() === 'hiring'
        ? 'AI engineering role – Ishaan Patel'
        : 'Project brief – Ishaan Patel';
    const body =
      this.mode() === 'hiring'
        ? 'Hi Ishaan,\n\nI am hiring for an AI engineering role and would like to talk to you about it.\n\nThe role is: \nThe team is: \n\nThanks,'
        : 'Hi Ishaan,\n\nI would like to discuss a project with you.\n\nWhat I want to build: \nTimeline: \nBudget range: \n\nThanks,';
    return `mailto:${this.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  protected setMode(mode: AudienceMode): void {
    this.mode.set(mode);
  }

  protected openMail(): void {
    window.location.href = this.mailto();
  }
}
