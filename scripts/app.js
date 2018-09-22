var app = angular.module('calculadora',[]);
 app.controller ('CalculadoraCtrl', function($scope){
  $scope.operacionParcial ='';
    $scope.valor = function(valor){
        console.log($scope.operacionParcial);
        $scope.operacionParcial= $scope.operacionParcial + valor;
         var tipoDato = (typeof valor);
         if(tipoDato == 'string' &&  $scope.operacionParcial.length == 1){
            $scope.operacionParcial = 0 + valor
        }    
        else
            $scope.resultado = eval($scope.operacionParcial);
    }
     $scope.igual = function(){
        $scope.resultado = eval($scope.operacionParcial);
        $scope.operacionParcial ='';
    }
     $scope.reset = function(){
        $scope.resultado = '';
        $scope.operacionParcial ='';
    }
 })