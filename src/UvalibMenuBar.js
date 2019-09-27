import { html, css, LitElement } from 'lit-element';
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar.js';

export class UvalibMenuBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        height: 50px;
      }
    `;
  }

  static get properties() {
    return {
      items: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  render() {
    return html`
      <vaadin-menu-bar .items="${this.items}"></vaadin-menu-bar>
    `;
  }
}
