const { createDiv } = require('../util');

class WorkSpace {
    constructor(main) {
        this.component = createDiv({ className: 'mainArea', id: 'mainArea' });
        this.main = main;
    }

    getComponent() {
        return this.component;
    }
}

module.exports = WorkSpace;
