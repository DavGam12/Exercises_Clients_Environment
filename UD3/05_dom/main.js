document.addEventListener('DOMContentLoaded', () => {
    console.log(Array.from(document.getElementsByTagName('button')));
    console.log(Array.from(document.querySelectorAll('buttons'))); // ???
    console.log(Array.from(document.getElementsByClassName('buttons'))[0]);
    console.log(Array.from(document.getElementsByClassName('buttons')));
})