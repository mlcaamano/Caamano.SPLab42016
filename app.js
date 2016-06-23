var app = angular.module('CGPAdinsa', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.selection','ui.grid.exporter','ui.router', 'angularFileUpload', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider){


  $authProvider.loginUrl = 'http://localhost:8080/Caamano.SPLab42016/Datos/Login/';
  $authProvider.signupUrl = 'http://localhost:8080/Caamano.SPLab42016/Datos/Login/';
  $authProvider.tokenName = 'tokenFest2016';
  $authProvider.tokenPrefix = 'login';
  $authProvider.authHeader = 'Data';



  $stateProvider

  .state('login', {
    url: '/login',
    views: {
      'contenido': {templateUrl: 'login.html',controller: 'controlLogin'}
    }
  })

  .state('inicio', {
    url: '/inicio',
    views: {
      'menu': { templateUrl: 'templateMenu.html',controller: 'controlMenu' }
    }
  })

  .state('grillaUsuario', {
    url: '/grillaUsuario',
    views: {
      'menu': { templateUrl: 'templateMenu.html',controller: 'controlMenu' },
      'contenido': {templateUrl: 'templateGrillaUsuario.html',controller: 'controlGrillaUsuario'}
    }
  })

  .state('grillaProductos', {
    url: '/grillaProductos',
    views: {
      'menu': { templateUrl: 'templateMenu.html',controller: 'controlMenu' },
      'contenido': {templateUrl: 'templateGrillaProducto.html',controller: 'controlGrillaProducto'}
    }
  })

  .state('altaUsuario', {
    url: '/altaUsuario',
    views: {
      'menu': { templateUrl: 'templateMenu.html',controller: 'controlMenu' },
      'contenido': {templateUrl: 'templateAltaUsuario.html',controller: 'controlAltaUsuario'}
    }
  })

  .state('altaProducto', {
    url: '/altaProducto',
    views: {
      'menu': { templateUrl: 'templateMenu.html',controller: 'controlMenu' },
      'contenido': {templateUrl: 'TemplateAltaProducto.html',controller: 'controlAltaProducto'}
    }
  })

  .state('modificarUsuario', {
    url: '/modificarUsuario/{:dni}?:apellido:nombres:foto',
    views: {
      'menu': { templateUrl: 'templateMenu.html',controller: 'controlMenu' },
      'contenido': {templateUrl: 'templateAltaUsuario.html',controller: 'controlModificarUsuario'}
    }
  })

  $urlRouterProvider.otherwise('/login');

});

