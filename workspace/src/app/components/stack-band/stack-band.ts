import { Component } from '@angular/core';
import { STACK } from '../../data/portfolio';

@Component({
  selector: 'app-stack-band',
  templateUrl: './stack-band.html',
  styleUrl: './stack-band.css',
})
export class StackBand {
  protected readonly stack = STACK;
}
