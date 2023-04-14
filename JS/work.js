const contents = document.getElementsByClassName('content');
for (let i = 0; i < contents.length; i++) {
    contents[i].style.color = 'red';
}

const idElement = document.getElementById('id');
idElement.textContent = '새로운 내용';

const pp = document.getElementsByClassName('pp');
for(let i = 0; i < pp.length; i++) {
    pp[i].style.color = 'blue';
}

const selectedItem = document.getElementsByName('id-first');
for(let i = 0; i < selectedItem; i++) {
    selectedItem[i].style.color = 'purple';
}