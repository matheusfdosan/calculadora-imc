class IMC {
  constructor(nome, altura, peso) {
    this.nome = nome
    this.altura = altura
    this.peso = peso
  }

  /**
   * @param imc Mostra o IMC kg/m^2
   */
  get mostrarImc() {
    return this.peso / (this.altura * this.altura)
  }

  /**
   * @param {number} imc Mostra o resultado. Se está abaixo do peso, com peso ideal, levemente acima do peso, etc.
   */
  get mostrarResultado() {
    let resultado
    if (this.mostrarImc < 18.5) {
      resultado = "abaixo do peso"
    } else if (this.mostrarImc >= 18.5 && this.mostrarImc < 24.9) {
      resultado = "com peso ideal"
    } else if (this.mostrarImc >= 25 && this.mostrarImc <= 29.9) {
      resultado = "levemente acima do peso"
    } else if (this.mostrarImc >= 30 && this.mostrarImc <= 34.9) {
      resultado = "com obesidade grau I"
    } else if (this.mostrarImc >= 35 && this.mostrarImc <= 39.9) {
      resultado = "com obesidade grau II"
    } else if (this.mostrarImc >= 40) {
      resultado = "com obesidade grau III"
    }
    return resultado
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()

  const testeIMC = new IMC(
    e.target[0].value,
    e.target[1].value,
    e.target[2].value
  )

  document.querySelector("#display").innerHTML = `${
    testeIMC.nome
  } seu IMC é ${testeIMC.mostrarImc.toFixed(2)} kg/m<sup>2</sup> e você está ${
    testeIMC.mostrarResultado
  }.`
})
