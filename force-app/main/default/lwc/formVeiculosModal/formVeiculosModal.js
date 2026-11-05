import LightningModal from 'lightning/modal';
import { track } from 'lwc';


export default class FormVeiculosModal extends LightningModal {
    // Monitora as alterações nas propriedades do objeto. 
    // Consigo alterar os valores da prop, sem intancia-lá novamente
    @track objVeiculo = {
        marca: '',
        modelo:'',
        versao:'',
        ano: '',
        descricao:'',
        motor: '',
        hibrido_eletrico: false
    };

    handleChange(event){
        // Pega o input field onde o evento foi acionado.
        const field = event.target.name;
        //Atualiza o valor da propriedade do obj conforme o usuário digita
        if(field === 'marca'){
            this.objVeiculo.marca = event.target.value;
        } else if(field === 'modelo'){
            this.objVeiculo.modelo = event.target.value;
        } else if(field === 'versao'){
            this.objVeiculo.versao = event.target.value;
        } else if(field === 'ano'){
            this.objVeiculo.ano = event.target.value;
        } else if(field === 'descricao'){
            this.objVeiculo.descricao = event.target.value;
        } else if(field === 'motor'){
            this.objVeiculo.motor = event.target.value;
        } else if(field === 'hibrido_eletrico'){
            this.objVeiculo.hibrido_eletrico = event.target.checked;
        }
        
    }
    
    //Retorna a promise com o objeto contendo os dados do novo veículo
    handleCadastroVeiculo(){
        this.close(this.objVeiculo);
    }

    handleLimparCampos(event){
        //Lógica de limpar todos os campos.
    }

}