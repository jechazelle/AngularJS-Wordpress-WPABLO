/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular
    .module('WPABLO')
    .controller('postController', postController);

postController.$inject = ['$rootScope', '$scope', '$location', '$routeParams', '$timeout', '$sce', 'postsFactory'];

function postController($rootScope, $scope, $location, $routeParams, $timeout, $sce, postsFactory) {
    
    var vm = this;
    
    $scope.myPostId = $routeParams.id;

    $scope.post = postsFactory.getPost($routeParams.id).then(function(post){
        
        if(post == ''){
            $location.url('error');  
        }
        
        if(post != ''){
            $scope.post = post;
            $scope.myPostTitle = post.title;
            $scope.myPostDate = post.date;
            $scope.myPostContent = post.content; 
            $scope.myPostAuthor = post.author.username;
        }
           
    },function(msg){
        alert(msg);
    });
    
    $scope.to_trusted = function(html_code) {
        return $sce.trustAsHtml(html_code);
    }
 
};