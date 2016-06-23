app.controller('controlLogin', function($scope, $http, $auth,$state){

  if($auth.isAuthenticated())
  {
    $state.go('inicio');
  }
  else
  {
    $scope.Entrar=function(){
      console.log($scope.Dni);

      $auth.login({correo:$scope.mail,nombre:$scope.nombre,clave:$scope.Clave})
      .then(function(respuestaAuth){
         
        console.info(respuestaAuth);
        console.info("datos auth en menu" ,$auth.isAuthenticated(),$auth.getPayload());
        //$auth.isAuthenticated()

        if($auth.isAuthenticated())   
        {   
          $state.go('inicio');   
        }
        else
        {
          alert("Error de  datos, favor de verificar campos");
        } 
      })
      .catch(function(parametro){
        console.info("error", parametro);
      });
    }    
  }


});