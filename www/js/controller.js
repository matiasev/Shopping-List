(function(){
  'use strict';

  angular
    .module('starter')
    .controller('myController', ['$scope', myController]);

    function myController($scope){
      var vm = this;
      var tasks = new getTasks();
      
      vm.itens = tasks.produtos;
      tasks.save();
      vm.numero = vm.itens.length;

      vm.adicionarItem = function(addItem){
        vm.itens.push(addItem);
        vm.numero - vm.itens.length;
        tasks.save();
        delete vm.addItem;
      }
      vm.removeItem = function(item){
        debugger;
        vm.itens.splice(item, 1);
        vm.numero - vm.itens.length;
        tasks.save();
      }
      vm.selecionado = function(item){
        item.done = !item.done;
        tasks.save();
      }
    }
}());