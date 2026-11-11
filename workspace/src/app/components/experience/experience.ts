import { Component } from '@angular/core';
import { EDUCATION, EXPERIENCE } from '../../data/portfolio';
import { Reveal } from '../../shared/reveal';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
}
