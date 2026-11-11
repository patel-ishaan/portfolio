import { Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
})
export class Reveal implements OnInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  private safety?: ReturnType<typeof setTimeout>;

  @Input() appReveal = 0;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const node = this.host.nativeElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
      node.classList.add('is-in');
      return;
    }

    node.classList.add('reveal');
    node.style.transitionDelay = `${this.appReveal}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add('is-in');
            this.observer?.disconnect();
            if (this.safety) {
              clearTimeout(this.safety);
            }
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' },
    );

    this.observer.observe(node);
    this.safety = setTimeout(() => node.classList.add('is-in'), 2200);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.safety) {
      clearTimeout(this.safety);
    }
  }
}
