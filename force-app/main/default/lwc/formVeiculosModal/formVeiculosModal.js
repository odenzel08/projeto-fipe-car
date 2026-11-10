import LightningModal from 'lightning/modal';

export default class FormVeiculosModal extends LightningModal {

    // handleRef(){
    //     console.log('Botão Cadastrar acionado');     
    //     this.refs.form.submit();
    // }
    
    //Retorna a promise com o objeto contendo os dados do novo veículo
    handleCadastrarVeiculo(event){
        console.log('EVENTO SUBMIT DISPARADO!');
        //Para o salvamento automático do record-edit-form
        console.log(this.template.querySelector('[data-id="marca"]').value);
        console.log(this.template.querySelector('[data-id="modelo"]').value)
        console.log(this.template.querySelector('[data-id="hev"]').value);
        
        

        //Cria um objeto com os campos do input
        const dados = {
            Marca__c: this.template.querySelector('[data-id="marca"]').value,
            Modelo__c: this.template.querySelector('[data-id="modelo"]').value,
            Versao__c: this.template.querySelector('[data-id="versao"]').value,
            Ano__c: this.template.querySelector('[data-id="ano"]').value,
            Descricao__c: this.template.querySelector('[data-id="desc"]').value,
            Motor__c: this.template.querySelector('[data-id="motor"]').value,
            Hibrido_Eletrico__c: this.template.querySelector('[data-id="hev"]').value
        }
        console.log('Objeto construído:', JSON.stringify(dados));
        console.log('Campo híbrido:', dados.hev);
        console.log('Tipo:', typeof dados.hev);
        
        this.close(dados);
    }

    handleLimparCampos(){
        //Lógica de limpar todos os campos
        const fields = this.template.querySelectorAll('lightning-input-field');
        if (fields){
            fields.forEach(field => field.reset());
        }
    }

}