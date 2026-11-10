import { LightningElement } from 'lwc';
import FormModal from 'c/formVeiculosModal';
import salvarVeiculoController from '@salesforce/apex/VeiculoController.salvarVeiculoController';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class VeiculosPage extends LightningElement {

    async handleClique(){
        const dadosVeiculo = await FormModal.open();
        console.log("🚀 ~ VeiculosPage ~ handleClique ~ dadosVeiculo:", dadosVeiculo)
        console.log('dadosVeiculo:' + JSON.stringify(dadosVeiculo));
        console.log(typeof dadosVeiculo.hev);

        if(!dadosVeiculo){
            return;
        } 

        //enviar os dados para a classe apex
        salvarVeiculoController({veiculo: dadosVeiculo})
            .then(resultado => {
                if(resultado.sucesso === true){
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Cadastro realizado!',
                        message: `Veículo cadastrado. ID: ${resultado.idVeiculo}`,
                        variant: 'success'
                    }));
                } else if(resultado.sucesso === false){
                    this.dispatchEvent(new ShowToastEvent({
                        title: 'Erro ao realizar cadastro',
                        message: resultado.mensagem,
                        variant: 'error'
                    }));
                }
            })
            .catch(error => {
                console.log("🚀 ~ VeiculosPage ~ handleClique ~ error:", error)
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Erro inesperado',
                    message: error.body?.message || error.message,                   
                    variant: 'error'
                }));
            })
    }

}