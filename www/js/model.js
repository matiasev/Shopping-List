function getList() {
  this.produtos = [];

  let lista = localStorage.getItem("Shopping list");

  if (lista !== null){
    this.produtos = angular.fromJson(lista);
  }

  this.save = function() {
    let lista = angular.toJson(this.produtos)
    localStorage.setItem("Shopping list", lista);
  }
}