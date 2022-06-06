import Animal from './Animal.js'

export default class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Grunir() {
        let sonido = `
        <audio controls>
            <source src="assets/sounds/Gruñido.mp3" type="audio/mpeg">
            Tu navegador no soporta la etiqueta audio de html5.
        </audio>
        `
        return sonido
    }

}