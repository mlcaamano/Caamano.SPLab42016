<?php

//Cargar Slim
require '../vendor/autoload.php';

//Clases
require '../PHP/AccesoDatos.php';
require '../PHP/usuarios.php';
require '../PHP/productos.php';



$app = new Slim\App();

// INICIO USUARIOS
$app->get('/traerUsuarios[/]', function ($request, $response, $args) {
	$listado['listado']= usuario::TraerTodosLosUsuarios();
    $response->write(json_encode($listado));
    return $response;
});

$app->post('/AltaUsuarios[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
	$unaPersona= usuario::InsetarUnUsuario($respuesta->datos->usuario);
	$response->write(var_dump($unaPersona));
});

// $app->put('/ModificarUsuarios[/]', function($request, $response, $args){
//     $respuesta=json_decode($request->getBody());
//     $unaPersona= usuario::ModificarUnUsuario($respuesta->datos->usuario);

//     $response->write(var_dump($unaPersona));
// });

// $app->put('/ModificarClave[/]', function($request, $response, $args){
//     $respuesta=json_decode($request->getBody());
//     $unaPersona= usuario::ModificarClave($respuesta->datos->clave);

//     $response->write(var_dump($unaPersona));
// });

$app->post('/Login[/]', function($request, $response, $args){
    
    include_once '../PHP/JWT.php';
    include_once '../PHP/ExpiredException.php';
    include_once '../PHP/BeforeValidException.php';
    include_once '../PHP/SignatureInvalidException.php';

    $objDatos = json_decode($request->getBody());

    $objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
    $consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM misusuarios WHERE correo='$objDatos->correo' AND nombre='$objDatos->nombre' AND clave='$objDatos->clave'");
    $consulta->execute();
    $idUsuario=$consulta->fetchObject('usuario');


    if($objDatos->correo==$idUsuario->correo && $objDatos->nombre==$idUsuario->nombre && $objDatos->clave==$idUsuario->clave)
    {
        $token=array(
            "correo"=>$idUsuario->correo,
            "nombre"=>$idUsuario->nombre,
            "tipo"=>$idUsuario->tipo,
            "exp"=>time() + 96000
        );

        $token = Firebase\JWT\JWT::encode($token, 'clave');

        $array['tokenFest2016']=$token;

        $response->write(json_encode($array));
        return $response;
    }
});

// $app->delete('/BorrarUsuario/{data}', function($request, $response, $args){
    
//     var_dump($args['data']); //Trae el dato
//     $unaPersona= usuario::BorrarUnUsuario($args['data']);
//     $response->write($args['data']);
// });

// FIN USUARIOS


// PRODUCTOS

$app->get('/traerProductos[/]', function ($request, $response, $args) {
 $listado['listado']= producto::TraerTodosLosProductos();
    $response->write(json_encode($listado));
    return $response;
});

$app->post('/AltaProducto[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
 $unaPersona= producto::InsetarUnProducto($respuesta->datos->producto);

 $response->write(var_dump($unaPersona));
});

$app->delete('/BorrarProducto/{data}', function($request, $response, $args){
    
    var_dump($args['data']); //Trae el dato
    $unaPersona= producto::BorrarUnProducto($args['data']);
    $response->write($args['data']);
});

// FIN PRODUCTOS



$app->run();

