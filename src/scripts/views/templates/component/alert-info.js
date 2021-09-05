import { LitElement, html, css } from 'lit-element';

class MyElement extends LitElement {
  static get properties() {
    return {
      autoClose: { type: Boolean },
      display: { type: Boolean },
      close: { type: Boolean },
      config: { type: Object },
      customStyle: { type: String },
      message: { type: String },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.type = 'error';
    this.display = true;
    this.display = true;
    this.config = {
      success: {
        class: 'alert-success',
        mainMessage: '',
      },
      info: {
        class: 'alert-info',
        mainMessage: '',
      },
      error: {
        class: 'alert-error',
        mainMessage: 'Something Wrong!',
      },
    };
  }

  static get styles() {
    return css`
      .alert {
        position: relative;
        padding: .75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: .25rem;
      }
      .alert-success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
      }
      .alert-info {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
      }
      .alert-error {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
      }
      .close {
        position: absolute;
        top: 0;
        right: 0;
        min-height:44px;
        min-width:44px;
        color: inherit;
        font-size: 16px;
        background-color: transparent;
        border: 0;
      }
      .close:hover {
        cursor: pointer;
      }
    `;
  }

  initAutoClose() {
    if (!this.autoClose) return;

    setTimeout(() => {
      this.display = false;
    }, 5000);
  }

  handleCloseBtn() {
    this.display = false;
  }

  createCloseBtn() {
    if (!this.close) return html``;

    return html`
      <button @click="${this.handleCloseBtn}" type="button" class="close" aria-label="Close This Alert">
        <span aria-hidden="true">×</span>
      </button>
    `;
  }

  render() {
    if (!this.display) return html``;

    return html`
      <div 
        class="alert ${this.config[this.type].class}"
        role="alert"
      >
        <b>${this.config[this.type].mainMessage}</b> ${this.message}
        ${this.createCloseBtn()}
      </div >
      `;
  }

  firstUpdated() {
    this.initAutoClose();
  }
}

customElements.define('alert-info', MyElement);
