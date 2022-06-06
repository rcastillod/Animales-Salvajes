import Animal from './Animal.js'

export default class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido)
    }

    Chillar() {
        let sonido = `
        <audio controls>
            <source src="assets/sounds/Chillido.mp3" type="audio/mpeg">
            Tu navegador no soporta la etiqueta audio de html5.
        </audio>
        `
        return sonido
    }

}