import LightningModal from 'lightning/modal';

export default class FormVeiculosModal extends LightningModal {
    
    //Retorna a promise com o objeto contendo os dados do novo veículo
    handleCadastrarVeiculo(event){
        //Para o salvamento automático do record-edit-form
        event.preventDefault();
        //Cria um objeto com os campos do input
        const dados = event.detail.fields;
        dados.Marca__c = this.template.querySelector('[data-id="marca"]');
        dados.Modelo__c = this.template.querySelector('[data-id="modelo"]');
        dados.Versao__c = this.template.querySelector('[data-id="versao"]');
        dados.Ano__c = this.template.querySelector('[data-id="ano"]');
        dados.Descricao__c = this.template.querySelector('[data-id="desc"]');
        dados.Motor__c = this.template.querySelector('[data-id="motor"]');
        dados.Hibrido_Eletrico__c = this.template.querySelector('[data-id="hev"]');
            
        this.close(this.dados);
        console.log('🟨 [33] [formVeiculosModal.js] this.dados: ' + this.dados);
    }

    handleLimparCampos(){
        //Lógica de limpar todos os campos
        const fields = this.querySelectorAll('lightning-input-field');
        if (fields){
            fields.forEach(field => field.reset());
        }
    }

}