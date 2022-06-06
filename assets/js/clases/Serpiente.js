import Animal from './Animal.js'

export default class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Sisear() {
        let sonido = `
        <audio controls>
            <source src="assets/sounds/Siseo.mp3" type="audio/mpeg">
            Tu navegador no soporta la etiqueta audio de html5.
        </audio>
        `
        return sonido
    }

}