class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this);
    }
    // _ convecao essas propriedades so podem ser 
    //acessadas pelos proprios metodos da classe
    // com _ ninguem de fora pode acessalo
    get volume() {
        return this._quantidade * this.valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}