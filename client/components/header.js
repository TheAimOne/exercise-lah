const { createDiv } = require('../util');

class Header {
    constructor(main) {
        this.component = createDiv({ className: 'header', id: 'header' });
        this.main = main;
    }

    getComponent() {
        return this.component;
    }
}

module.exports = Header;
