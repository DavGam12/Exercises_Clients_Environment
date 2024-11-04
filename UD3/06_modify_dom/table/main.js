let id = 0;
function onClick() {
    id++;
    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    let td = document.createElement('td')
    td.innerHTML = `<a href='http://localhost/edit/id'>${id}</a>`;
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Example'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Surname'
    tr.appendChild(td)

    td = document.createElement('td')
    td.innerText = 'Update'
    tr.appendChild(td)

    tbody.appendChild(tr)
    console.log('add')
}
