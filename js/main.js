const editor = document.getElementById('editor')
let selected = undefined
const triangle = document.getElementById('triangle')

//added events in all buttons for modifie text decoration
const buttonsOptions = document.getElementsByClassName('commands')
for (let button of buttonsOptions) {

    button.addEventListener('click', () => {
        //get type command and execute commands with obsolet command execCommand()
        let command = button.dataset['command']
        document.execCommand(command, false, null)

    })

}

//function to manager options choosed
function optionsClick(option) {
    
    if (option == 'center' || option == 'left') {

        //aling text
        editor.style.textAlign = option

    } else if (option == 'link') {

        //show/hide modal for add links
        const mainAside = document.getElementById('mainAside')

        if (mainAside.style.visibility == 'visible') {

            mainAside.style.visibility = 'hidden'
            triangle.style.visibility = 'hidden'

        } else {

            mainAside.style.visibility = 'visible'
            triangle.style.visibility = 'visible'
            triangle.style.top = '479.3px'

        }

        //hide modals open
        const imageAside = document.getElementById('image')

        imageAside.style.visibility = 'hidden'

    } else if (option == 'img') {

        //show/hide modal for add image
        const imageAside = document.getElementById('image')

        if (imageAside.style.visibility == 'visible') {

            imageAside.style.visibility = 'hidden'
            triangle.style.visibility = 'hidden'

        } else {

            imageAside.style.visibility = 'visible'
            imageAside.style.height = '150px'
            triangle.style.visibility = 'visible'
            triangle.style.top = '524px'

        }

        //hide modal opens
        const mainAside = document.getElementById('mainAside')

        mainAside.style.visibility = 'hidden'

    }   

}

//function to manager click button on bottom editor
function buttons(click) {

    if (click == 'save') {

        //not added for while
        alert('Function not added')

    } else {

        //clear all
        document.getElementById('editor').textContent = ''

    } 
} 
