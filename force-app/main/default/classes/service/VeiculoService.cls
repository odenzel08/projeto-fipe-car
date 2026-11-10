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

    public class ListResponse{
        @AuraEnabled
        public String marca;
        @AuraEnabled
        public String modelo;
        @AuraEnabled
        public String ano;
        @AuraEnabled
        public Integer valor;

        public ListResponse(String marca, String modelo, String ano, Integer valor) {
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.valor = valor;
        }

    }

    public static List<ListResponse> buscarTodosVeiculos(){
        List<ListResponse> wrapperList = new List<ListResponse>();

        //Itera diretamente sobre a consulta e armazena na wrapperList
        for (ListResponse lr : [SELECT Id, Marca__c, Modelo__c, Ano__c, Valor__c FROM Veiculo__c LIMIT 10]) {
            wrapperList.add(new ListResponse(lr.Marca__c, lr.Modelo__c, lr.Ano__c, 100000));
        } //LIMIT é só para teste (temporário)
        return wrapperList;

    }
}