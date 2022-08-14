const button = document.querySelector('.Button');
const colorBoxes = document.querySelector('.color-boxes');
const colorBoxtemplate = document.querySelector('#color-box-tmp');

let boxarry = [];

for (let i = 0; i < 16; i++) {
  boxarry.push(i);
}


button.addEventListener('click', () => {
  removeoldchildren()
  additem();
});


function randomColor() {
  let anumber = Math.floor(Math.random() * 100);
  let bnumber = Math.floor(Math.random() * 100);
  let cnumber = Math.floor(Math.random() * 355);
  let color;
  return (color = `hsl(${cnumber}, ${bnumber}%, ${anumber}%)`);
}

function additem() {
  boxarry.forEach(() => {
    let colorBox = colorBoxtemplate.content.cloneNode(true);
    let item = colorBox.querySelector('.color-box');
    let text = item.querySelector('h4');
    text.innerText = randomColor();
    item.style.background = randomColor();
    colorBoxes.appendChild(item);
  });
}

function removeoldchildren() {
  if (colorBoxes.children.length != 0) {
    let childArry = Array.from(colorBoxes.children);
    childArry.forEach((child) => {
      child.remove();
    });
  }
}