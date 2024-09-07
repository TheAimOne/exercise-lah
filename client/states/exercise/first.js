
class InitialState {
    constructor({ main, args }) {
        this.main = main;
        this.header = main.getHeader();
        this.leftNav = main.getLeftNav();
        this.ws = main.getWS();
    }

    init() {
        const temp = document.createElement("div");
        temp.textContent = 'I am dummy WS';

        const temp1 = document.createElement("div");
        temp1.textContent = 'I am dummy Header';


        this.ws.getComponent().appendChild(temp);
        this.header.getComponent().appendChild(temp1);
    }
}

module.exports = InitialState;
