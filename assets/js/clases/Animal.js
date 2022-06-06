export default class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = () => nombre
        this._edad = () => edad
        this._img = () => img
        this._comentarios = () => comentarios
        this._sonido = () => sonido
    }

    get getNombre() {
        return this._nombre()
    }
    get getEdad() {
        return this._edad()
    }
    get getImg() {
        return this._img()
    }
    get getComentarios() {
        return this._comentarios()
    }
    get getSonido() {
        return this._sonido()
    }
    
    set setComentarios(new_comentarios) {
        return this._comentarios = () => new_comentarios
    }

}