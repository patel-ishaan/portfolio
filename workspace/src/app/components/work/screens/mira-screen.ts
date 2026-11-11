import { Component } from '@angular/core';

@Component({
  selector: 'app-mira-screen',
  template: `
    <div class="ui mira" data-ui>
      <div class="ui__top">
        <p class="ui__brand">MIRA</p>
        <p class="ui__meta">Stylist session</p>
      </div>

      <div class="mira__body">
        <div class="mira__brief">
          <p class="ui__label">Your brief</p>
          <p class="mira__quote">
            “Height 162 cms, Weight 64kg, wheatish skin and a selfie to top it all off"
          </p>
          <dl class="ui__dl">
            <div><dt>Occasion</dt><dd>Wedding</dd></div>
            <div><dt>Palette</dt><dd>Olive, cream</dd></div>
            <div><dt>Fit</dt><dd>Relaxed</dd></div>
          </dl>
          <span class="ui__btn">Generate looks</span>
        </div>

        <div class="mira__looks">
          <div class="mira__looks-head">
            <p class="ui__label">Three looks</p>
            <p class="ui__meta">For a 24° evening</p>
          </div>

          <article class="look-row">
            <div class="look-row__swatches" aria-hidden="true">
              <span style="background:#5d6247"></span>
              <span style="background:#e6dcc6"></span>
              <span style="background:#a97b4f"></span>
            </div>
            <div>
              <p class="look-row__name">Olive overshirt</p>
              <p class="look-row__items">Ivory kurta · tan loafer</p>
            </div>
          </article>

          <article class="look-row">
            <div class="look-row__swatches" aria-hidden="true">
              <span style="background:#7b8064"></span>
              <span style="background:#f0e8d8"></span>
              <span style="background:#6d5f4c"></span>
            </div>
            <div>
              <p class="look-row__name">Sage bandhgala</p>
              <p class="look-row__items">Cream trouser · leather mule</p>
            </div>
          </article>

          <article class="look-row">
            <div class="look-row__swatches" aria-hidden="true">
              <span style="background:#3f4a3a"></span>
              <span style="background:#ded3bd"></span>
              <span style="background:#8b6a45"></span>
            </div>
            <div>
              <p class="look-row__name">Deep olive set</p>
              <p class="look-row__items">Raw silk kurta · woven sandal</p>
            </div>
          </article>

          <div class="mira__tryon">
            <div>
              <p class="ui__label">Virtual try-on</p>
              <p>Overlay ready · see the look on you</p>
            </div>
            <span class="ui__btn ui__btn--light">Open try-on</span>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class MiraScreen {}
