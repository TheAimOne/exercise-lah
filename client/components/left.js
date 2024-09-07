const { createDiv } = require('../util');

class LeftNav {
    constructor(main) {
        this.component = createDiv({ className: 'leftNav', id: 'leftNav' });
        this.main = main;
    }

    getComponent() {
        return this.component;
    }

    addButton(button) {
        this.component.appendChild(button);
    }
}

module.exports = LeftNav;
