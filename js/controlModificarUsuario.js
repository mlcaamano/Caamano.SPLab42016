app.controller('controlModificarUsuario', function($scope, $http, $stateParams, FileUploader, serviceCargadorDeFotos) {
  $scope.DatoTest="*modificar**";


  $scope.uploader = new FileUploader({url: 'nexoUsuario.php'});
  $scope.uploader.queueLimit = 1;

  $scope.usuario={};
  $scope.usuario.Dni=$stateParams.dni ;
  $scope.usuario.Apellido= $stateParams.apellido ;
  $scope.usuario.Nombres=$stateParams.nombres ;
  $scope.usuario.Foto=$stateParams.foto;

  serviceCargadorDeFotos.cargarFoto($scope.usuario.Foto, $scope.uploader);

  $scope.uploader.onSuccessItem= function(item, response, status, headers) {

  console.info("Voy a modificar", item, response,status, headers);  

  console.log("persona a guardar:");
  console.log($scope.usuario);
  $http.put('http://localhost:8080/PersonasFinal/Datos/ModificarUsuarios/', { datos: {accion :"modificarUsuario",usuario:$scope.usuario}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta.data);
    alert("Se ha ingresado correctamente");
  },function errorCallback(response) {        
    //aca se ejecuta cuando hay errores
    console.log( response);           
  });
 }

  $scope.Guardar=function(){

    
    if($scope.uploader.queue[0].file.name!='pordefecto.png')
    {
      var nombrefoto=$scope.uploader.queue[0].file.name;
      $scope.usuario.Foto=nombrefoto;
    }

    $scope.uploader.uploadAll();
  }
});