
document.addEventListener('DOMContentLoaded', () => {
    console.log(Array.from(document.getElementsByTagName('button')));
    console.log(Array.from(document.getElementsByClassName('buttons')));
    console.log(Array.from(document.querySelectorAll('div.buttons'))[0]);
    console.log(Array.from(document.querySelectorAll('div.buttons')));
})
