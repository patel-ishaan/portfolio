import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
  computed,
  signal,
} from '@angular/core';
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
export class Work implements AfterViewInit, OnDestroy {
  protected readonly projects = PROJECTS;
  protected readonly activeIndex = signal(0);
  protected readonly active = computed<Project>(() => this.projects[this.activeIndex()]);

  @ViewChildren('step') private steps!: QueryList<ElementRef<HTMLElement>>;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }
          const index = Number((entry.target as HTMLElement).dataset['index']);
          if (!Number.isNaN(index)) {
            this.activeIndex.set(index);
          }
        }
      },
      { threshold: 0, rootMargin: '-46% 0px -46% 0px' },
    );

    this.steps.forEach((step) => this.observer?.observe(step.nativeElement));
  }

  protected choose(index: number): void {
    this.activeIndex.set(index);
    const step = this.steps?.get(index)?.nativeElement;
    if (!step) {
      return;
    }
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = window.scrollY + step.getBoundingClientRect().top;
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
