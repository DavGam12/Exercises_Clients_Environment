window.onload = function(ev)
{
    console.log('documento cargado');

    document.getElementsByTagName('h2')[1].textContent = 'Changed from JS!!';
    
    console.log(document.getElementById('username'));

    Array.from(document.querySelectorAll('article .first')).forEach(el =>
    {
        el.style.backgroundColor = '#00cccc';
    })

    console.log(Array.from(document.querySelectorAll('li.item')));

    console.log(Array.from(document.querySelectorAll('.buttons button')));

    Array.from(document.getElementsByTagName('p'))[0].style.backgroundColor = '#cc00cc';

    Array.from(document.querySelectorAll('.buttons button')).forEach(el =>
    {
        el.style.color = '#0088cc';
    })
}
