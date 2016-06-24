app.controller('controlAltaUsuario', function($scope, $http, FileUploader, $state, serviceCargadorDeFotos) {
  $scope.DatoTest="**alta**";

  $scope.uploader = new FileUploader({url: 'nexoUsuario.php'});
  $scope.uploader.queueLimit = 1;
      $scope.usuario={};
    $scope.usuario.Foto="pordefecto.png";

  serviceCargadorDeFotos.cargarFoto($scope.usuario.Foto, $scope.uploader);

  $scope.uploader.onSuccessItem= function(item, response, status, headers) {

  console.info("Voy a guardar", item, response,status, headers);

  console.log("persona a guardar:");
  console.log($scope.usuario);
  $http.post('http://localhost:8080/Caamano.SPLab42016/Datos/AltaUsuarios/', { datos: {accion :"altaUsuario",usuario:$scope.usuario}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta.data);

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

  $scope.maxDate = function () {
    var d = new Date();
    
    d.setDate(d.getDate());
    
    return d;
  };

});