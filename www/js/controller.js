var app = angular.module('meuApp', []);
app.controller('meuController', function ($scope) {

  var tasks = new getTasks();
  
  $scope.itens = tasks.produtos;
  tasks.save();  
  $scope.numero = $scope.itens.length;
  
  $scope.adicionarItem = function (addItem) {
      
      $scope.itens.push(addItem);     
      $scope.numero = $scope.itens.length;
      tasks.save();
      delete $scope.addItem;
  }

  
  $scope.removeItem = function (item) {
    $scope.itens.splice(item, 1);
    $scope.numero = $scope.itens.length;
    tasks.save();
  };
  $scope.selecionado = function(item){
    item.done = !item.done;
    tasks.save();
  };
  
});