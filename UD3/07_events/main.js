window.onload = function(ev)
{
    const paragraphs = Array.from(document.getElementsByTagName('p'));
    const links = Array.from(document.getElementsByTagName('a'));

    links.forEach((el, index) =>
    {
        el.onclick = () => {
            if (paragraphs[index].style.display !== 'none')
            {
                paragraphs[index].style.display = 'none';
                el.textContent = 'Mostrar contenidos';
            }
            else
            {
                paragraphs[index].style.display = 'block';
                el.textContent = 'Ocultar contenidos';
            }
        };
    })
}
