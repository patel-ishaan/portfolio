import { Component } from '@angular/core';

interface AgentRow {
  name: string;
  tool: string;
  result: string;
}

@Component({
  selector: 'app-hitched-screen',
  template: `
    <div class="ui hitched" data-ui>
      <div class="ui__top">
        <p class="ui__brand">Hitched</p>
        <p class="ui__meta">Agent run · demo</p>
      </div>

      <div>
        <p class="ui__label">The brief</p>
        <p class="hitched__brief">“A three-day wedding in Udaipur, 120 guests, in February.”</p>
      </div>

      <div class="hitched__plan" aria-label="Plan details">
        <span>Udaipur</span>
        <span>February</span>
        <span>120 guests</span>
      </div>

      <div class="hitched__agents">
        @for (agent of agents; track agent.name) {
          <div class="agent">
            <span class="agent__dot" aria-hidden="true"></span>
            <div>
              <p class="agent__name">{{ agent.name }}</p>
              <p class="agent__tool">{{ agent.tool }}</p>
            </div>
            <p class="agent__result">{{ agent.result }}</p>
          </div>
        }
      </div>

      <div class="hitched__guard">
        <span>Prompt-injection check</span>
        <span>Passed</span>
      </div>
    </div>
  `,
})
export class HitchedScreen {
  protected readonly agents: AgentRow[] = [
    { name: 'Venue agent', tool: 'Tavily search', result: 'Shortlist ready' },
    { name: 'Flight agent', tool: 'Kiwi MCP', result: 'Delhi → Udaipur' },
    { name: 'Playlist agent', tool: 'YouTube Music', result: 'Sangeet set ready' },
  ];
}
