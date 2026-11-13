public with sharing class VeiculoService {

    public class VeiculoResponse{
        @AuraEnabled
        public Boolean sucesso;
        @AuraEnabled
        public String mensagem;
        @AuraEnabled
        public String idVeiculo;
    }

    //Lógica para salvar novo veiculo
    public static VeiculoResponse salvarVeiculo(Veiculo__c veiculo){
        //Instancia da classe wrapper
        VeiculoResponse response = new VeiculoResponse();

        try {
            //Salva o objeto no banco e retorna a classe wrapper preenchida.
            insert veiculo;
            System.debug('✅ [30] [VeiculoService] veiculo: ' + veiculo);
            response.sucesso = true;
            response.mensagem = veiculo.Marca__c + veiculo.Modelo__c + ' cadastrado';
            response.idVeiculo = veiculo.Id;
            System.debug('✅ [33] [VeiculoService] response: ' + response);
            return response;
        } catch (DmlException e) {
            response.sucesso = false;
            response.mensagem = e.getMessage();
            response.idVeiculo = null;
            System.debug('🛑 [39] [VeiculoService] response: ' + response);
            return response;
        }
    }


    public static List<Veiculo__c> buscarTodosVeiculos(){

        try {
            List<Veiculo__c> veiculos = [
                SELECT Id, Marca__c, Modelo__c, Ano__c, Valor__c
                FROM Veiculo__c
                WHERE CreatedDate = LAST_N_DAYS:7
                ORDER BY CreatedDate Desc
            ];
            return veiculos;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }

    }

    public static Veiculo__c exibirDetalhes(String id){
        try {
            Veiculo__c veiculo = new Veiculo__c();
            veiculo = [
                SELECT Id, Marca__c, Modelo__c, Versao__c, Ano__c, Descricao__c, Hibrido_Eletrico__c, Motor__c, Variacao__c
                FROM Veiculo__c
                WHERE Id = :id
            ];
            return veiculo;
        } catch (DmlException e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}