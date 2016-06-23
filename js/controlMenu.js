app.controller('controlMenu', function($scope, $http, $auth, $state){

  if($auth.isAuthenticated())   
  {
    $scope.UsuarioLogueado= $auth.getPayload();
    console.info($scope.UsuarioLogueado);     
  }
  else
  {
    $state.go('login'); 
  } 

  $scope.Salir=function(){
	$auth.logout();
	if($auth.isAuthenticated())   
	{

	}
	else
	{
	  $state.go('login'); 
	} 
  }

  $scope.Guardar=function(){

    if($scope.clave.pass==$scope.clave.confirmacion)
    {

      $scope.clave.Dni=$scope.UsuarioLogueado.dni;
        $http.put('http://localhost:8080/PersonasFinal/Datos/ModificarClave/', { datos: {accion :"modificarClave",clave:$scope.clave}})
        .then(function(respuesta) {       
          //aca se ejetuca si retorno sin errores        
          console.log(respuesta.data);
          alert("La contrasela se ha cambiado exitosamente");
          },function errorCallback(response) {        
              //aca se ejecuta cuando hay errores
              console.log( response);           
          });
        }
    else
    {
      alert("No coinciden, por favor verificar datos");
    }
  }
});