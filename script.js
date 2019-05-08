const divSahdow = document.querySelector('body');
divSahdow.style.backgroundColor = 'rgb(100, 100, 100)';

x = 100;
y = 100;
z = 100;
const h2 = document.createElement('h2');
h2.style.color = `rgb(${0}, ${0}, ${0}`;


document.querySelector('body').appendChild(h2);
h2.textContent = 'Click arrow up or down to change background color';
h2.style.fontFamily = 'arial';

const changeTitle = () => {
    h2.textContent = 'This is not arrow key!!';
    h2.style.color = 'red';
}

const arrowUpKey = () => {
    x += 3;
    y += 3;
    z += 3;
    divSahdow.style.backgroundColor = `rgb(${x}, ${z}, ${y}`;
    h2.textContent = 'Click arrow up or down to change background color';
    h2.style.color = 'white';
}

const arrowDownKey = () => {
    x -= 3;
    y -= 3;
    z -= 3;
    divSahdow.style.backgroundColor = `rgb(${x}, ${z}, ${y}`;
    h2.textContent = 'Click arrow up or down to change background color';
    h2.style.color = 'black';
}

addEventListener("keydown", (e) => {

    if (e.which === 38) {
        if (x < 255) {
            arrowUpKey();

        } else {
            h2.textContent = 'Background is white';
            h2.style.color = 'black';
        }
    } else if (e.which === 40) {
        if (x >= 0) {
            arrowDownKey();

        } else {
            h2.textContent = 'Background is black';
            h2.style.color = 'white';
        }
    } else {
        changeTitle();
    }
})