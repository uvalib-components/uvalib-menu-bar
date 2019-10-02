import { html, css, LitElement } from 'lit-element';
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar.js';

export class UvalibMenuBar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
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
        @item-selected="${this.__selected}"
      ></vaadin-menu-bar>
    `;
  }

  __selected(ev) {
    const event = new CustomEvent('item-selected', {
      detail: ev.detail,
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }
}
