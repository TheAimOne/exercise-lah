const header  = document.createElement("div");
header.className = 'header';

const bottomArea  = document.createElement("div");
bottomArea.className = 'bottomArea';


const leftNav  = document.createElement("div");
leftNav.className = 'leftNav';

const mainArea  = document.createElement("div");
mainArea.className = 'mainArea';

const leftNavButton1  = document.createElement("div");
leftNavButton1.className = 'leftNavButton';

const leftNavButton2  = document.createElement("div");
leftNavButton2.className = 'leftNavButton';


leftNavButton1.addEventListener('click', () => {
    console.log('dinga hoiiii');
});

leftNavButton2.addEventListener('click', () => {
    console.log('ramba hoiiii');
});



leftNav.appendChild(leftNavButton1);
leftNav.appendChild(leftNavButton2);

bottomArea.appendChild(leftNav);
bottomArea.appendChild(mainArea);


const app = document.getElementById('app');

app.appendChild(header);
app.appendChild(bottomArea);
