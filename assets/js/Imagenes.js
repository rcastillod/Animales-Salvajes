import Animales from './Consulta.js'

document.getElementById('animal').addEventListener('change', async e => {
    const { animales } = await Animales.getData()
    const anim = e.target.value
    const imagenAnimal = animales.find( animal => animal.name == anim )
    const imagenUrl = `"assets/img/${imagenAnimal.imagen}"`
    const imagenWrapper = document.getElementById('preview')
    imagenWrapper.style.backgroundImage = `url(${imagenUrl})`
})