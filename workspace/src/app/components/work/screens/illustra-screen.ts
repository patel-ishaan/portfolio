import { Component } from '@angular/core';

interface Bar {
  month: string;
  height: number;
}

@Component({
  selector: 'app-illustra-screen',
  template: `
    <div class="ui illustra" data-ui>
      <div class="ui__top">
        <p class="ui__brand">Illustra</p>
        <p class="ui__meta">sample.csv · preview</p>
      </div>

      <div class="illustra__body">
        <nav class="illustra__rail" aria-label="Illustra workspace">
          <p class="ui__label">Workspace</p>
          <span class="is-active">Chart</span>
          <span>Clean</span>
          <span>Model</span>
        </nav>

        <div class="illustra__main">
          <div class="illustra__file">
            <span>sample.csv</span>
            <span>Monthly rows</span>
          </div>

          <div class="chart" role="img" aria-label="A sample bar chart of monthly rows">
            @for (bar of bars; track bar.month) {
              <span
                [class.is-peak]="bar.height === 96"
                [style.height.%]="bar.height"
                [attr.title]="bar.month"
              ></span>
            }
          </div>
          <div class="chart-labels" aria-hidden="true">
            <span>Jan</span>
            <span>Mar</span>
            <span>Jun</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>

          <div class="illustra__insight">
            <div>
              <p class="ui__label">DeepSeek insight</p>
              <p>“Which months drive the annual total?”</p>
            </div>
            <span class="ui__btn">Run analysis</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class IllustraScreen {
  protected readonly bars: Bar[] = [
    { month: 'Jan', height: 42 },
    { month: 'Feb', height: 55 },
    { month: 'Mar', height: 48 },
    { month: 'Apr', height: 62 },
    { month: 'May', height: 58 },
    { month: 'Jun', height: 70 },
    { month: 'Jul', height: 64 },
    { month: 'Aug', height: 78 },
    { month: 'Sep', height: 72 },
    { month: 'Oct', height: 88 },
    { month: 'Nov', height: 82 },
    { month: 'Dec', height: 96 },
  ];
}
