class DateHelper {

    constructor() {
        throw new Error('DateHelper nao pode ser instaciada');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d/.test(texto))
            throw new erro('Deve estar no formato aaaa-mm-dd')

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
    }
}