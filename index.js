// Variables globales
const tarea = document.forms[0].tarea
const textarea = document.forms[0].descripcion
const btnForm = document.forms[0].btnForm
const tableTareas = document.querySelector('#table-tareas')


// Funciones
const create = () =>{
    if(createData)
    {
        templateHTML += `
        <tr>
        <td>${idTarea}</td>
        <td>${tarea.value}</td>
        <td>${textarea.value}</td>
        <td><a href="#" class="btn btn-danger" class="btnremove">Eliminar</a></td>
        <td><a href="#" class="btn btn-success">Editar</a></td>
        </tr>
        `
        tableTareas.innerHTML=templateHTML
        idTarea++;
        
    }else{
        tareaElement.children[1].innerHTML = tarea.value;
        tareaElement.children[2].innerHTML = descripcion.value;
        tareaElement = ''
        createData = true;
    }
    
    document.forms[0].reset()
}
const read = i =>{
    tarea.value = tableTareas.children[i-1].children[1].innerHTML
    textarea.value = tableTareas.children[i-1].children[2].innerHTML
}
const update = i =>{
    tareaElement = tableTareas.children[i-1]
}
const remove = i =>{
    tableTareas.children[i-1].innerHTML = ''
}
// Eventos
idTarea = 1;
templateHTML = ''
createData = true;
tareaElement = '';
btnForm.addEventListener('click', ()=>{
    create()
})
tableTareas.addEventListener('click', e =>{
    e.preventDefault()
    const indice = e.path[2].childNodes[1].innerHTML;

    if(e.target.innerHTML == "Eliminar")
    {
        remove(indice)
    }else if(e.target.innerHTML == "Editar"){
        read(indice)
        update(indice)
        createData = false;
    }
})

