class NegociacoesView extends View{

    constructor(elemento){
        super(elemento);
    }

    template(model) {
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
    
        <tbody>
            ${model.negociacoes.map(negociacao =>
            `
                <tr>
                    <th>${DateHelper.dataParaTexto(negociacao.data)}</th>
                    <th>${negociacao.quantidade}</th>
                    <th>${negociacao.valor}</th>
                    <th>${negociacao.volume}</th>
                </tr>
            `).join('')}
        </tbody>
    
        <tfoot>
        <td colspan='3'></td>
        <td>
            ${model.negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0.0)}
        </td>
        </tfoot>
    </table>`
    }

}