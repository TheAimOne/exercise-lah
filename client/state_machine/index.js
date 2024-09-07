const {} = require('../util');

class StateMachine {
    constructor(app) {
        this.app = app;
        this.states = {};
    }

    addState(name, state) {
        this.states[name] = state;
    }

    setState(name, args) {
        this.state = this.states[name];
        this.state.init(args);
    }
}

module.exports = StateMachine;
