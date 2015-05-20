/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular
    .module('WPABLO')
    .controller('headerController', headerController);

headerController.$inject = ['$rootScope', '$scope', '$location' ,'$timeout'];

function headerController($rootScope, $scope, $location, $timeout) {
    
    var vm = this;
    
    $scope.isActive = function(route) {
        return route === $location.path();
        console.log('ok');
    }
  
};