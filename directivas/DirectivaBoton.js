angular.module("CGPAdinsa")
.directive("botonGuardar", 

    function(){
        return {templateUrl: 'templateBoton.html', 
                // restrict:'E',
                // replace: true,
                // scope:{titulo: '@'}
            };
    }
);
//ui-grid