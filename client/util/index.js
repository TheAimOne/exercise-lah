
function createDiv({ id, className }) {
    const div = document.createElement('div');
    div.id = id;
    div.className = className;
    return div;
}

function clearPage(app) {
    while (app.lastElementChild) {
        app.removeChild(app.lastElementChild);
    }
}

module.exports = { 
    createDiv,
    clearPage,
};
