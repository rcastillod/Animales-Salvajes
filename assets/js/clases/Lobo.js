import Animal from './Animal.js'

export default class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Aullar() {
        let sonido = `
        <audio controls>
            <source src="assets/sounds/Aullido.mp3" type="audio/mpeg">
            Tu navegador no soporta la etiqueta audio de html5.
        </audio>
        `
        return sonido
    }

}