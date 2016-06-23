app.controller('controlLogin', function($scope, $http, $auth,$state){

  if($auth.isAuthenticated())
  {
    $state.go('inicio');
  }
  else
  {
    $scope.Entrar=function(){


      $auth.login({correo:$scope.mail,nombre:$scope.nombre,clave:$scope.clave})
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

    $scope.Admin=function(){
      $scope.mail= "admin@admin.com";
      $scope.nombre="admin";
      $scope.clave="321";
    }  

    $scope.Vend=function(){
      $scope.mail= "vend@vend.com";
      $scope.nombre="vend";
      $scope.clave="321";
    }         
  

    $scope.Comp=function(){
      $scope.mail= "comp@comp.com";
      $scope.nombre="comprador";
      $scope.clave="123";
    }         
  }

});