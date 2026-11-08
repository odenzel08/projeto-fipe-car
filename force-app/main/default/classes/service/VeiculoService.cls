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
    public static VeiculoResponse salvarVeiculo(String marca, String modelo, String versao, 
        String ano, String descricao, Double motor, Boolean ev){
        //Instancia da classe wrapper
        VeiculoResponse response = new VeiculoResponse();

        Veiculo__c veiculo = new Veiculo__c();
        veiculo.Marca__c = marca;
        veiculo.Modelo__c = modelo;
        veiculo.Versao__c = versao;
        veiculo.Ano__c = ano;
        veiculo.Descricao__c = descricao;
        veiculo.Motor__c = motor;
        veiculo.Hibrido_Eletrico__c = ev;

        try {
            //Salva o objeto no banco e retorna a classe wrapper preenchida.
            insert veiculo;
            response.sucesso = true;
            response.mensagem = veiculo.Marca__c + veiculo.Modelo__c + ' cadastrado';
            response.idVeiculo = veiculo.Id;
            return response;
        } catch (DmlException e) {
            response.sucesso = false;
            response.mensagem = e.getMessage();
            response.idVeiculo = null;
            return response;
        }
    }
}