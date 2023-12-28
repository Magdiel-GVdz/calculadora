const botonNumero = document.querySelectorAll('[data-numero]')
const botonOperador = document.querySelectorAll('[data-operador]')
const botonBorrar = document.querySelector('[data-borrar]')
const botonIgual = document.querySelector('[data-igual]')
const botonBorrarTodo = document.querySelector('[data-borrar-todo]')
const textoValorSuperior = document.querySelector('[data-valor-superior]')
const textoValorInferior = document.querySelector('[data-valor-inferior]')
//const botonPunto = document.querySelector('[data-punto]')

//operadorSePuedeColocar = false
//puntoSePuedeColocar = true

class Calculadora {
    constructor(textoValorInferior,textoValorSuperior){
        this.textoValorInferior = textoValorInferior
        this.textoValorSuperior = textoValorSuperior
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
    }

    agregarNumero(numero){
        if(numero === '.' && this.valorInferior.includes('.')) return
        this.valorInferior = this.valorInferior + numero
        //operadorSePuedeColocar = true
    }

    borrar(){

        //if (this.valorInferior.length > 0 && this.valorInferior[this.valorInferior.length - 1] === '.') {
        //    puntoSePuedeColocar = true
        //}

        this.valorInferior = this.valorInferior.length === 1 ? "" : this.valorInferior.substring(0, this.valorInferior.length - 1);

        //if (this.valorInferior === ""){
        //    operadorSePuedeColocar = false
        //    puntoSePuedeColocar = true
        //} else {
        //    operadorSePuedeColocar = true
        //}

    }

    //borrar(){
    //    this.valorInferior = this.valorInferior.slice(0,-1)
    //}

    borrarTodo(){
        this.valorInferior = ''
        this.valorSuperior = ''
        this.operador = undefined
        //operadorSePuedeColocar = false
        //puntoSePuedeColocar = true
    }

    agregarOperador(operador){
        this.valorInferior = this.valorInferior + operador
        //operadorSePuedeColocar = false
        //puntoSePuedeColocar = true
    }

    agregarPunto(punto){
        this.valorInferior = this.valorInferior + punto
        //puntoSePuedeColocar = false
    }

    elegirOperacion(operador){
        if(this.valorInferior == '') return
        if(this.valorInferior != '') {
            this.realizarCalculo()
        }
        this.operador = operador
        this.valorSuperior = this.valorInferior
        this.valorInferior = ''
    }

    realizarCalculo() {
        let resultado
        let conversionValorSuperior = parseFloat(this.valorSuperior)
        let conversionValorInferior = parseFloat(this.valorInferior)

        if(isNaN(conversionValorSuperior) || isNaN(conversionValorInferior)) return
        switch (this.operador) {
            case '+':
                resultado = conversionValorSuperior + conversionValorInferior
            break
            case '-':
                resultado = conversionValorSuperior - conversionValorInferior
            break
            case 'x':
                resultado = conversionValorSuperior * conversionValorInferior
            break
            case '÷':
                resultado = conversionValorSuperior / conversionValorInferior
            break
            default: return
        }
        this.valorInferior = resultado
        this.operador = undefined
        this.valorSuperior =''
    }

    imprimirDisplay(){
        this.textoValorInferior.innerText = this.valorInferior
        this.textoValorSuperior.innerText = this.valorSuperior
    }
}

const calculadora = new Calculadora(textoValorInferior,textoValorSuperior)

botonNumero.forEach(boton => {
    boton.addEventListener('click', () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

botonBorrar.addEventListener('click', () => {
    calculadora.borrar()
    calculadora.imprimirDisplay()
})

botonBorrarTodo.addEventListener('click', () => {
    calculadora.borrarTodo()
    calculadora.imprimirDisplay()
})

//botonPunto.addEventListener('click', () => {
//    if (puntoSePuedeColocar){
//        calculadora.agregarPunto('.')
//        calculadora.imprimirDisplay()
//    }
//})

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => {
        //if (operadorSePuedeColocar) {
        //    calculadora.agregarOperador(boton.innerText)
        //    calculadora.imprimirDisplay()
        //}
        calculadora.elegirOperacion(boton.innerText)
        calculadora.imprimirDisplay()
    })
})

botonIgual.addEventListener('click', () => {
    calculadora.realizarCalculo()
    calculadora.imprimirDisplay()
})
