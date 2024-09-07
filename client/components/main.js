const { createDiv } = require('../util');
const Header = require('./header');
const Left = require('./left');
const WS = require('./work_space');

class MainComponent {

    constructor() {
        this.app = document.getElementById('app');

        this.header = new Header(this);
        this.left = new Left(this);
        this.ws = new WS(this);
    }

    init() {
      const bottomArea  = createDiv({ className: 'bottomArea', id: 'bottomArea' });

      bottomArea.appendChild(this.left.getComponent());
      bottomArea.appendChild(this.ws.getComponent());

      this.app.appendChild(this.header.getComponent());
      this.app.appendChild(bottomArea);
    }

    getHeader() {
        return this.header;
    }

    getLeftNav() {
        return this.left;
    }

    getWS() {
        return this.ws;
    }

}

module.exports = MainComponent;
