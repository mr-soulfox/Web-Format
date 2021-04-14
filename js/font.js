function fontModifie() {
    const editor = document.getElementById('editor')
    const px = document.getElementById('fontSize').value
    
    if (px <= 11) {

        editor.style.fontSize = '16px'
    } else if (px > 60) {

        editor.style.fontSize = '60px'
    } else {

        editor.style.fontSize = `${px}px`
    }
}