function addtolist() {
    var taskname = document.getElementById('taskname').value
    var tododiv = document.getElementById('mytodo')

    var newtodoitem = document.createElement('div')
    var todoname = document.createElement('li')
    todoname.innerHTML = taskname
    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(deletebtn)

    tododiv.appendChild(newtodoitem)
}


var tododiv1 = document.getElementById('mytodo')
tododiv1.addEventListener('click', deleteitem)

function deleteitem(e) {
    const element = e.target
        // or if(element.classList[0]=="far")
    if (element.classList[1] == 'fa-trash-alt') {
        element.parentElement.remove();
    }
}