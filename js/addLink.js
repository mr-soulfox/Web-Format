const link = document.getElementById('link')
const text = document.getElementById('text')
const labelLink = document.getElementById('labelLink')
const labelText = document.getElementById('labelText')
let error = 0

function addLink() {

    const editor = document.getElementById('editor')

    //verifie
    if (link.value == '') {

        labelLink.innerHTML = 'Link: <strong style="color: red; font-weight: 500;">Fill link</strong>'
        link.style.border = '2px solid red'

        error++

    } else if (link.toString().indexOf('https://') !== -1 || link.toString().indexOf('http://') !== -1) {

        labelLink.innerHTML = 'Link: <strong style="color: red; font-weight: 500;">Url invalid</strong>'
        link.style.border = '2px solid red'

        error++
    } else {

        labelLink.innerHTML = 'Link: '
        link.style.border = 'none'

        error = 0
    }

    if (text.value == '') {

        labelText.innerHTML = 'Text: <strong style="color: red; font-weight: 500;">Fill Text</strong>'
        text.style.border = '2px solid red'

        error++

    } else {

        labelText.innerHTML = 'Text: '
        text.style.border = 'none'

        error = 0
    }

    //add link in editor
    if (error <= 0) {

        editor.innerHTML += ` <a href="${link.value}" target="_blank" style="text-decoration: none; color: blue;">${text.value}</a> `

        text.value = ''
        link.value = ''
    }

}