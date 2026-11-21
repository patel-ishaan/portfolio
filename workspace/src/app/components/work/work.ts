import { Component, computed, signal } from '@angular/core';
import { Project, PROJECTS } from '../../data/portfolio';
import { HitchedScreen } from './screens/hitched-screen';
import { IllustraScreen } from './screens/illustra-screen';
import { MiraScreen } from './screens/mira-screen';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-work',
  imports: [MiraScreen, HitchedScreen, IllustraScreen, Reveal],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work {
  protected readonly projects = PROJECTS;
  protected readonly activeIndex = signal(0);
  protected readonly active = computed<Project>(() => this.projects[this.activeIndex()]);
  protected readonly direction = signal<'next' | 'prev'>('next');

  protected choose(index: number): void {
    const current = this.activeIndex();
    if (index === current) {
      return;
    }
    this.direction.set(index > current ? 'next' : 'prev');
    this.activeIndex.set(index);
  }
}
