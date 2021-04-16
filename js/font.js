function fontModifie(option) {

    //modifie font size
    if (option == 'fontSize') {

        const editor = document.getElementById('editor')
        const px = document.getElementById('fontSize').value
        
        if (px < 11) {

            editor.style.fontSize = '11px'

        } else if (px > 64) {

            editor.style.fontSize = '64px'

        } else {

            editor.style.fontSize = `${px}px`
            
        }
    
    } else if (option == 'fontFamily') {
        //modifie font family

        const editor = document.getElementById('editor')
        const fontFamily = document.getElementById('fontFamily').value

        editor.style.fontFamily = fontFamily

    }
    
}