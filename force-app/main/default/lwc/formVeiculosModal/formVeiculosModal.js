import LightningModal from 'lightning/modal';

export default class FormVeiculosModal extends LightningModal {
    // Monitora as alterações nas propriedades do objeto. 
    // Consigo alterar os valores da prop, sem intancia-lá novamente
    dados = {
        marca: '',
        modelo:'',
        versao:'',
        ano: '',
        descricao:'',
        motor: '',
        hibrido_eletrico: false
    };

    handleChange(event){
        // // Pega o input field onde o evento foi acionado.
        const field = event.target.name;
        // Pega .checked se for booleano/checkbox, senão pega .value
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        // Atualiza o objeto de forma imutável
        this.dados = {
            ...this.dados,
            [field]: value
        };
        
    }
    
    //Retorna a promise com o objeto contendo os dados do novo veículo
    handleCadastrarVeiculo(){
        this.close(this.dados);
    }

    handleLimparCampos(event){
        //Lógica de limpar todos os campos.
    }

}