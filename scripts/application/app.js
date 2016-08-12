    var app = angular.module('QrCode', [  
    'ngNewRouter',
    'ngAnimate',
    'QrCode.home',
    'QrCode.jsqr'
]);
    


app.config(function ($locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

app.controller('AppController', AppController);
function AppController($router, $scope) {
    $router.config([        
        { path: '/',            component: 'home' },
        { path: '/jsqr',            component: 'jsqr' }
    ]);

 
    $scope.$on('$locationChangeSuccess', function (next, current) {
        var currLocation = $router.lastNavigationAttempt;
        console.log('changesuccess ',currLocation);
        setTimeout(function(){
            scrollTo.scrollTo(0, function(){}, 100);
        },150);
    });
}



