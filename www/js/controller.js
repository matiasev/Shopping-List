var app = angular.module('meuApp', []);
app.controller('meuController', function ($scope) {

  var tasks = new getTasks();
  
  $scope.itens = tasks.produtos;
  tasks.save();  
  
  $scope.numero = $scope.itens.length;
  
  
  $scope.adicionarItem = function () {
    $scope.errortext = "";

    if (!$scope.adicionarText.nome) {
      return;
    }
    if ($scope.itens.indexOf($scope.adicionarText.nome) == -1) {
      
      $scope.itens.push({nome:$scope.adicionarText.nome, done:false});
      
      
      $scope.numero = $scope.itens.length;
      
      tasks.save();
      
    } else {
      $scope.errortext = "Item já adicionado.";
    }
    delete $scope.adicionarText;
  }
  
  $scope.removeItem = function (item) {
    $scope.errortext = "";
    $scope.itens.splice(item, 1);
    $scope.numero = $scope.itens.length;
    tasks.save();
  };
  $scope.selecionado = function(item){
    item.done = !item.done;
    tasks.save();
  };
  
});