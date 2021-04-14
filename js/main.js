const editor = document.getElementById('editor')
let selected = undefined

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

        } else {

            mainAside.style.visibility = 'visible'

        }

        mainAside.addEventListener('dblclick', () => {

            mainAside.style.visibility = 'hidden'

        })

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
