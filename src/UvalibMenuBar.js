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
      openOnHover: {
        reflect: true,
        type: Boolean,
        attribute: 'open-on-hover',
      },
    };
  }

  constructor() {
    super();
    this.items = [];
    this.openOnHover = false;
  }

  render() {
    return html`
      <vaadin-menu-bar
        .items="${this.items}"
        ?open-on-hover="${this.openOnHover}"
      ></vaadin-menu-bar>
    `;
  }
}
