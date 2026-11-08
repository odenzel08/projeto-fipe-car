public with sharing class VeiculoController {
    
    @AuraEnabled
    public static VeiculoService.VeiculoResponse salvarVeiculoController(String marca, String modelo, String versao, 
        String ano, String descricao, Double motor, Boolean ev){

        return VeiculoService.salvarVeiculo(marca, modelo, versao, ano, descricao, motor, ev);    
    }
    
}