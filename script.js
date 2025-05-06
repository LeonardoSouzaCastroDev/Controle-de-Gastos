const matrizGastos = [
  ["Alimentação", 0],
  ["Transporte", 0],
  ["Lazer", 0],
  ["Outros", 0],
  ["total", 0]
]

//Funções utilitárias
const obterElemento = (id) => document.getElementById(id)
const valorNegativo = (valor) => valor < 0
const somarValor = (total, valor) => total + valor
const limparCampos = () => obterElemento('valor').value = ''
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',')

//Obter valores do formulário
const obterValorInformado = () => parseFloat(obterElemento('valor').value)
const obterCategoriaInformada = () => obterElemento('categoria').value

//Obter categoria da Matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria)

//Atualizar valores da matriz
const atualizaValoresCategoria = (categoria, valor) => categoria[1] = somarValor(categoria[1], valor)

const atualizarInterface = () => {
  matrizGastos.forEach(([nome, valor]) =>{
    const elemento = obterElemento(nome)
    elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`
  })
}

function adicionarGasto(){
 const valorInformado = obterValorInformado()
 const categoriaInformada = obterCategoriaInformada()

 if(valorNegativo(valorInformado)){
  alert('Valor inválido. O valor não pode ser negativo')
  return;
 }
 const categoria = obterCategoria(matrizGastos, categoriaInformada)
 const total = obterCategoria(matrizGastos, 'total')

 atualizaValoresCategoria(categoria, valorInformado)
 atualizaValoresCategoria(total, valorInformado)

 atualizarInterface()
 limparCampos()
}