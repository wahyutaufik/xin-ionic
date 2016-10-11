import xin from 'xin';

class IonButton extends xin.Component {
  get template () {
    return `
      <span class="button-inner"><slot>Button</slot></span>
      <div class="button-effect"></div>
    `;
  }

  get props () {
    return {
      outline: {
        type: Boolean,
        value: false,
      },

      color: {
        type: String,
        value: '',
      },

      full: {
        type: Boolean,
        value: false,
      },

      block: {
        type: Boolean,
        value: false,
      },

      round: {
        type: Boolean,
        value: false,
      },

      fab: {
        type: Boolean,
        value: false,
      },

      small: {
        type: Boolean,
        value: false,
      },

      large: {
        type: Boolean,
        value: false,
      },

      menutoggle: {
        type: Boolean,
        value: false,
      },
    };
  }

  ready () {
    if (this.menutoggle) {
      this.addEventListener('click', evt => {
        evt.preventDefault();

        this.__app.menu.open();
      });
    }
  }

  attached () {
    let prefix = xin.dom(this).parent('.toolbar') ? 'bar-' : '';

    let mode = (this.__app && this.__app.platformMode) || 'md';

    let classList = ['button'];

    // outline
    classList.push(this.outline ? `${prefix}button-outline` : `${prefix}button-default`);

    // platform
    classList.push(`${prefix}button-${mode}`);
    classList.push(`${prefix}button-${this.outline ? 'outline' : 'default'}-${mode}`);

    // color
    if (this.color) {
      classList.push(`${prefix}button-${mode}-${this.color}`);
    }

    // shape
    if (this.full) {
      classList.push(`${prefix}button-full`, `${prefix}button-full-${mode}`);
    }
    if (this.block) {
      classList.push(`${prefix}button-block`, `${prefix}button-block-${mode}`);
    }
    if (this.round) {
      classList.push(`${prefix}button-round`, `${prefix}button-round-${mode}`);
    }
    if (this.fab) {
      classList.push(`${prefix}button-fab`, `${prefix}button-fab-${mode}`);
    }

    // size
    if (this.small) {
      classList.push(`${prefix}button-small`, `${prefix}button-small-${mode}`);
    }
    if (this.large) {
      classList.push(`${prefix}button-large`, `${prefix}button-large-${mode}`);
    }

    // menutoggle
    if (this.menutoggle) {
      classList.push(`${prefix}button-menutoggle`, `${prefix}button-menutoggle-${mode}`);
    }

    classList.forEach(className => {
      this.classList.add(className);
    });
  }
}

xin.define('ion-button', IonButton, { extends: 'button' });

export default IonButton;
