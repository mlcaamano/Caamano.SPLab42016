app.controller('controlAltaUsuario', function($scope, $http, FileUploader, $state, serviceCargadorDeFotos) {
  $scope.DatoTest="**alta**";

  $scope.Guardar=function(){

  console.log("persona a guardar:");
  console.log($scope.producto);
  $http.post('http://localhost:8080/PersonasFinal/Datos/AltaUsuarios/', { datos: {accion :"altaUsuario",producto:$scope.producto}})  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta.data);
    // alert("Se ha ingresado correctamente");
    // $state.go('/grillaUsuario');

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

});