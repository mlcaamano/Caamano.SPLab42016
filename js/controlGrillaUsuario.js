app.controller('controlGrillaUsuario', function($scope, $http, factoryPersona) {
    $scope.DatoTest="**grilla**";
  


  function bien(respuesta)
  {
    $scope.ListadoUsuarios = respuesta.data.listado;
    console.log(respuesta.data);
    console.log( $scope.ListadoUsuarios);
  }

  function mal(respuesta)
  {
    $scope.ListadoUsuarios= [];
    console.log( "esta mal");
  }

  $http.get('http://localhost:8080/Caamano.SPLab42016/Datos/traerUsuarios/', { params: {accion :"traerUsuarios"}})
  .then(bien, mal);

$scope.Borrar=function(usuario){

    console.log(usuario);

    var data = usuario.id;
    
    $http.delete('http://localhost:8080/Caamano.SPLab42016/Datos/BorrarUsuario/' +data)
   .then(function(respuesta) {       
           //aca se ejetuca si retorno sin errores        
           console.log(respuesta.data);
           // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
           // .then(bien, mal);

             $http.get('http://localhost:8080/Caamano.SPLab42016/Datos/traerUsuarios/', { params: {accion :"traerUsuarios"}})
  .then(bien, mal);

      },function errorCallback(response) {
           $scope.ListadoPersonas= [];
          console.log( response);
     });
}

});









