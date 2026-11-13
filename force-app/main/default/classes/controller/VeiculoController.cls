public with sharing class VeiculoController {
    
    @AuraEnabled
    public static VeiculoService.VeiculoResponse salvarVeiculoController(Veiculo__c veiculo){

        return VeiculoService.salvarVeiculo(veiculo);    
    }
    @AuraEnabled(cacheable=true)
    public static List<Veiculo__c> buscarVeiculosController(){
        return VeiculoService.buscarTodosVeiculos();
    }
    
}