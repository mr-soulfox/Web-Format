function addImage() {

    //get elements
    const file = document.getElementById('fileImage')
    const editor = document.getElementById('editor')

    //create element for img
    const image = document.createElement('img')

    //create url for object in filelist
    image.src = window.URL.createObjectURL(file.files[0])

    //set 400px | add image in editor
    image.style.width = '400px'
    editor.appendChild(image)

}