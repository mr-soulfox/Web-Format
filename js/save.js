function save() {
    //create constants
    const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>HTML To Doc</title></head><body>"
    const postHtml = "</body></html>"

    const html = preHtml + document.getElementById('editorBox').innerHTML + postHtml

    //url for download
    let url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html)

    //create and add in body tag a (link)
    let downloadLink = document.createElement('a')
    document.body.appendChild(downloadLink)
    
    //set link | set download name | automatic click
    downloadLink.href = url
    downloadLink.download = 'Web-Format.doc'
    downloadLink.click()

    //remove element a
    document.body.removeChild(downloadLink)
}