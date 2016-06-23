app.controller('controlGrillaUsuario', function($scope, $http, factoryPersona) {
    $scope.DatoTest="**grilla**";
  


  // function bien(respuesta)
  // {
  //   $scope.ListadoUsuarios = respuesta.data.listado;
  //   console.log(respuesta.data);
  // }

  // function mal(respuesta)
  // {
  //   $scope.ListadoPersonas= [];
  //   console.log( respuesta);
  // }

  // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
  // .then(bien, mal);

  factoryPersona.mostrarGrilla("otro").then(function(respuesta){
    $scope.ListadoUsuarios=respuesta;
  });



$scope.Borrar=function(usuario){

    console.log(usuario);

    var data = usuario.Dni;
    
    $http.delete('http://localhost:8080/PersonasFinal/Datos/BorrarUsuario/' +data)
   .then(function(respuesta) {       
           //aca se ejetuca si retorno sin errores        
           console.log(respuesta.data);
           // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
           // .then(bien, mal);

             factoryPersona.mostrarGrilla("otro").then(function(respuesta){
              $scope.ListadoUsuarios=respuesta;
             });

      },function errorCallback(response) {
           $scope.ListadoPersonas= [];
          console.log( response);
     });
}
});









app.factory('factoryPersona',function(servicioUsuario){

    var persona={
      // nombre:'Leandro',
      // nombreApellido:'Leandro Cannarozzi',
      mostrarGrilla:function(dato){
          this.nombre=dato;
          return servicioUsuario.retornarPersonas().then(function(respuesta){
                  return respuesta;

          });
          //console.log("Este es mi nombre: "+dato);
      }
  };
    return persona;
});

app.service('servicioUsuario',function($http){
var listado;

  this.retornarPersonas=function(){
      return  $http.get('http://localhost:8080/PersonasFinal/Datos/traerUsuarios/')
        .then(function(respuesta) {       

          //$scope.ListadoPersonas = respuesta.data.listado;
          return respuesta.data.listado;

         //console.log(respuesta.data);

      });

  };


});