import { LightningElement, wire } from 'lwc';
import FormModal from 'c/formVeiculosModal';
import imagem from '@salesforce/resourceUrl/imagem_carro';
import salvarVeiculoController from '@salesforce/apex/VeiculoController.salvarVeiculoController';
import buscarVeiculos from '@salesforce/apex/VeiculoController.buscarVeiculosController';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class VeiculosPage extends LightningElement {

    carroImagem = imagem;

    //Variavel que vai receber a lista de veiculos 
    veiculos;
    // Variavel que avisa ao HTML que os dados do veiculo ainda não foram retornados
    error;

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

    // Os dados já podem ficar disponíveis assim que o componente for inicializado.
    @wire(buscarVeiculos)
    wiredVeiculos({data, error}){
        if(data){
            this.veiculos = data;
            this.error = undefined;
        } else if (error){
            this.veiculos = undefined;
            this.error = error;
        }
    }
    

}