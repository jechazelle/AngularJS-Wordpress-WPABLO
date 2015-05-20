/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular
    .module('WPABLO')
    .controller('postsController', postsController);

postsController.$inject = ['$rootScope', '$scope', '$location' ,'$timeout', '$sce', 'postsFactory'];

function postsController($rootScope, $scope, $location, $timeout, $sce, postsFactory) {
    
    var vm = this;

    $scope.posts = postsFactory.getPosts().then(function(posts){
        $scope.posts = posts;  
    },function(msg){
        alert(msg);
    });
    
    $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    }
 
};