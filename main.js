// Tipo de Automóvel - Terrestre, Aquático, Aéreo
function Tipo(tipo)
{
    this.tipo = tipo
}
// Características do Automóvel
function Caracteristicas(marca, modelo, anoModelo, anoFabricado, numeracaoDoAutomovel)
{
    this.marca = marca
    this.modelo = modelo
    this.anoModelo = anoModelo
    this.anoFabricado = anoFabricado

    // Numeração do Automóvel
    let _numeracaoDoAutomovel = numeracaoDoAutomovel

    // Pegando numeração
    this.getNumeracao = function()
    {
        return console.log(`Numeracação: ${_numeracaoDoAutomovel}`)
    }
    // Alterando numeração
    this.setNumeracao = function(valor)
    {
        if(typeof valor === "number")
        {
            _numeracaoDoAutomovel = valor
        }
    }
}

// Classe/Função construidora
function Veiculo(tipo, marca, modelo, anoModelo, anoFabricado, numeracaoDoAutomovel)
{
    // Fazendo Heranças de códigos
    Tipo.call(this, tipo)
    Caracteristicas.call(this, marca, modelo, anoModelo, anoFabricado, numeracaoDoAutomovel)

    // Métodos padrões
    this.acelerar = function()
    {
        console.log('Vai que vai fera!')
    }
    this.freiar = function()
    {
        console.log('Pare home, tá doido?')
    }
    this.dadosGerais = function()
    {
        console.log(`Tipo:${this.tipo}, Marca: ${this.marca}, Modelo: ${this.modelo}, Ano de Modelo: ${this.anoModelo} e Ano de Fabricação: ${this.anoFabricado}`)
    }
}

// instâncias
const carroDoJoao = new Veiculo('Terrestre', 'Ford', 'Ford Mustang', 2020, 2018, 235433)
const jetskiDaMaria = new Veiculo('Aquático', 'Yamaha', 'FZR Yamaha', 2021, 2019, 123143)
const jatoDoMatheus = new Veiculo('Aéreo', 'Embraer', 'Phenom 300', 2023, 2023, 121521)

// Requisitando dados
console.log(carroDoJoao)
carroDoJoao.dadosGerais()
carroDoJoao.getNumeracao()
carroDoJoao.acelerar()
carroDoJoao.freiar()

// Requisitando dados
console.log(jetskiDaMaria)
jetskiDaMaria.dadosGerais()
jetskiDaMaria.getNumeracao()
jetskiDaMaria.acelerar()
jetskiDaMaria.freiar()

// Requisitando dados
console.log(jatoDoMatheus)
jatoDoMatheus.dadosGerais()
jatoDoMatheus.getNumeracao()
jatoDoMatheus.acelerar()
jatoDoMatheus.freiar()