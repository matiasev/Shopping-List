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
        if(addItem != null){
          for (var i = 0; i < vm.itens.length; i++) {
            var element = vm.itens[i];
            if(addItem.nome == element.nome){
              alert("Item já adicionado!");
              delete vm.addItem;
              return;
            }
          }
          vm.itens.push(addItem);
          vm.numero - vm.itens.length;
          tasks.save();
          delete vm.addItem;
        }else{
          alert("Campo vazio!");
        }
      }
      vm.removeItem = function(item){
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