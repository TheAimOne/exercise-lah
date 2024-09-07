// const { createDiv } = require('./util');

// const header  = createDiv({ className: 'header', id: 'header' });
// const bottomArea  = createDiv({ className: 'bottomArea', id: 'bottomArea' });
// const leftNav  = createDiv({ className: 'leftNav', id: 'leftNav' });
// const mainArea  = createDiv({ className: 'mainArea', id: 'mainArea' });


const leftNavButton1  = document.createElement("div");
leftNavButton1.className = 'leftNavButton';

const leftNavButton2  = document.createElement("div");
leftNavButton2.className = 'leftNavButton';


// leftNavButton2.addEventListener('click', () => {
//     console.log('ramba hoiiii');
// });



// leftNav.appendChild(leftNavButton1);
// leftNav.appendChild(leftNavButton2);

// bottomArea.appendChild(leftNav);
// bottomArea.appendChild(mainArea);


// const app = document.getElementById('app');

// app.appendChild(header);
// app.appendChild(bottomArea);

const MainComponent = require('./components/main');

const main = new MainComponent();

main.getLeftNav().addButton(leftNavButton1);
main.getLeftNav().addButton(leftNavButton2);

main.init();

const StateMachine = require('./state_machine');

const InitialState = require('./states/exercise/first');

const temp1StateMachine = new StateMachine();

temp1StateMachine.addState('temp1_1', new InitialState({ main }))


leftNavButton1.addEventListener('click', () => {
    console.log('dinga hoiiii');
    temp1StateMachine.setState('temp1_1');
});