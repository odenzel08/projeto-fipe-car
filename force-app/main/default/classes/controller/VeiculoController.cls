public with sharing class VeiculoController {
    
    @AuraEnabled
    public static VeiculoService.VeiculoResponse salvarVeiculoController(Veiculo__c veiculo){

        return VeiculoService.salvarVeiculo(veiculo);    
    }
    
}