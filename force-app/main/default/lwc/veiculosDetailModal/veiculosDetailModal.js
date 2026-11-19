import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class VeiculosDetailModal extends LightningModal {

    @api infoList;
    
    handleCampoAlterado(event){
        const campo = event.target.fieldName;
        const valor = event.target.value;

        this.dispatchEvent(
            new CustomEvent('camposalterados', {
                detail: {
                    campo: campo,
                    valor: valor
                }
            })
        );
    }
}
