import Aguila from "./clases/Aguila.js";
import Leon from "./clases/Leon.js";
import Lobo from "./clases/Lobo.js";
import Oso from "./clases/Oso.js";
import Serpiente from "./clases/Serpiente.js";

let animales = []

document.getElementById('btnRegistrar').addEventListener('click', e => {
    e.preventDefault()

    let nombre = document.getElementById('animal').value
    let edad = document.getElementById('edad').value
    let imagen = document.getElementById('preview').style.backgroundImage
    let imagenSrc = imagen.slice(5, imagen.length -2)
    let comentarios = document.getElementById('comentarios').value

    let nuevoAnimal

    if ( nombre == 'Aguila' ) {
        nuevoAnimal = new Aguila(nombre, edad, imagenSrc, comentarios, 'Chillido')
    }
    else if ( nombre == 'Leon' ) {
        nuevoAnimal = new Leon(nombre, edad, imagenSrc, comentarios, 'Rugido')
    }
    else if ( nombre == 'Lobo' ) {
        nuevoAnimal = new Lobo(nombre, edad, imagenSrc, comentarios, 'Aullido')
    }
    else if ( nombre == 'Oso' ) {
        nuevoAnimal = new Oso(nombre, edad, imagenSrc, comentarios, 'Gruñido')
    }
    else if  ( nombre == 'Serpiente' ) {
        nuevoAnimal = new Serpiente(nombre, edad, imagenSrc, comentarios, 'Siseo')
    }

    if ( nombre && edad && imagenSrc && comentarios ) {
        animales.push(nuevoAnimal)
        createCard()
        cleanForm()
    } else {
        alert("Faltan datos por ingresar!")
    }


})


const createCard = () => {
    let listAnimales = document.getElementById('Animales')
    listAnimales.innerHTML = ''
    animales.forEach( (animal, i) => {
        let sonidoAnimal
        if ( animal.getNombre === 'Leon' ) {
            sonidoAnimal = animal.Rugir()
        } else if ( animal.getNombre === 'Lobo' ) {
            sonidoAnimal = animal.Aullar()
        } else if ( animal.getNombre === 'Oso' ) {
            sonidoAnimal = animal.Grunir()
        } else if ( animal.getNombre === 'Serpiente' ) {
            sonidoAnimal = animal.Sisear()
        } else {
            sonidoAnimal = animal.Chillar()
        }
        listAnimales.innerHTML += `
            <div class="card" style="width: 16.25rem;" onClick>
                <img src="${animal.getImg}" class="card-img-top" alt="${animal.getNombre}">
                <div class="card-body">
                    <h5 class="card-title">${animal.getNombre}</h5>
                    <div class="card-sonido">${sonidoAnimal}</div>
                    <button class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showModal('${animal.getNombre}')">Ver Detalle</button>
                </div>
            </div>
        `
    })
}

window.showModal = (name) => {
    let modalBody = document.querySelector('.modal-body')
    let animal = animales.find(animal => animal.getNombre === name)

    modalBody.innerHTML = `
        <div class="card">
            <img src="${animal.getImg}" class="card-img-top" alt="${animal.getNombre}">
            <div class="card-body">
                <h5 class="card-title">Nombre: ${animal.getNombre}</h5>
                <p class="card-text">Comentarios: ${animal.getComentarios}</p>
                <div id="sonidoAnimal">Sonido: ${animal.getSonido}</div>
            </div>
        </div>
    `

}

const cleanForm = () => {
    let nombre = document.getElementById('animal')
    let edad = document.getElementById('edad')
    let imagen = document.getElementById('preview')
    let comentarios = document.getElementById('comentarios').value = ''
    nombre.selectedIndex = 0
    edad.selectedIndex = 0
    imagen.style.backgroundImage = 'none'
}