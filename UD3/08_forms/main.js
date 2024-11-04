window.onload = function() {
    console.log(document.main_form.elements)

    console.log(document.getElementById('pregunta_si').value)
    console.log(document.getElementById('pregunta_si').checked)

    document.getElementById('pregunta_si').onchange = changeValue
    document.getElementById('pregunta_no').onchange = changeValue

    const mainForm = document.getElementById('mainForm');
    mainForm.addEventListener('submit', () => alert('The Form has been submitted'));

    Array.from(document.getElementById('combo').children).forEach(el => {
        el.addEventListener(('change'), (ev) => {
            if (!ev.srcElement.value.includes('si')) { document.getElementById('submit').disabled = true; }
            else { document.getElementById('submit').disabled = false; }
        })
    })
}

function changeValue(ev) {
     console.log('changed' + ev.target.value);
}
