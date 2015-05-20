/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular
    .module('WPABLO')
    .controller('errorController', errorController);

errorController.$inject = ['$rootScope', '$scope', '$location' ,'$timeout'];

function errorController($rootScope, $scope, $location, $timeout) {
    
    var vm = this;
    console.log('error');
 
};