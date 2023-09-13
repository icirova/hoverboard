const container = document.getElementById('container');
const colors = [
    '#E6E6FA',
    '#D8BFD8',
    '#DDA0DD',
    '#EE82EE',
    '#DA70D6',
    '#FF00FF',
    '#FF00FF',
    '#BA55D3',
    '#9370DB',
    '#8A2BE2',
    '#9400D3',
    '#9932CC',
    '#8B008B',
    '#800080',
    '#4B0082',
];

const squares = 505;

for (let i = 1; i < squares; i++) {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square');

    squareElement.addEventListener('mouseover', () => setColor (squareElement));
    squareElement.addEventListener('mouseout', () => removeColor (squareElement));

    container.appendChild(squareElement);
};

function setColor (element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (element) {
   element.style.background = '#2b2b2b';
   element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}


