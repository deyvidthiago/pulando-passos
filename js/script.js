const contar = document.getElementById('contar')
function calc() {
  let inicio = document.getElementById('start')
  let fim = document.getElementById('fim')
  let jump = document.getElementById('jump')
  let resultado = document.getElementById('resultado')
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    jump.value.length == 0
  ) {
    alert('impossivel contar!!')
    resultado = ''
  } else {
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    jump = Number(jump.value)
    if (inicio < fim) {
      for (let i = inicio; i <= fim; i += jump) {
        resultado.innerHTML += ` ${i} \u{1F449}`
      }
    } else if (inicio > fim) {
      for (let i = inicio; i >= fim; i -= jump) {
        resultado.innerHTML += `${i} 👈`
      }
    }
  }
  resultado.innerHTML += `\u{1F3C1}`
  const limpar = document.getElementById('limpar')

  limpar.addEventListener('click', () => {
    resultado.innerHTML = ''
  })
}
contar.addEventListener('click', calc)
