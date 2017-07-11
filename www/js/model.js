function getTasks() {
  
  this.produtos = [];

 var lista = localStorage.getItem("Shopping list");

 if (lista !== null)
  this.produtos = angular.fromJson(lista);

  this.save = function() {
    var lista = angular.toJson(this.produtos)
    localStorage.setItem("Shopping list", lista);
  }
}