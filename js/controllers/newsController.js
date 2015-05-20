/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular
    .module('WPABLO')
    .controller('newsController', newsController);

newsController.$inject = ['$rootScope', '$scope', '$location' ,'$timeout'];

function newsController($rootScope, $scope, $location, $timeout) {
    
    var vm = this;

};