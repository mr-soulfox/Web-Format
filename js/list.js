function list(type) {

    typeList = type == 'ordered' ? 'insertOrderedList' : 'insertUnorderedList';

    document.execCommand(`${typeList}`, false)

}