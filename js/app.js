/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular
    .module('WPABLO',[
    'ngRoute'
]).config(config)
  .run(run);
     
config.$inject = ['$routeProvider', '$locationProvider'];
     
function config($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider
   .when('/', {
        templateUrl: urlScripts.partials + 'home/home.html',
        controller: 'homeController as Home'
    })
    .when('/posts', {
        templateUrl: urlScripts.partials + 'posts/posts.html',
        controller: 'postsController as Posts'
    })
    .when('/post/:id', {
        templateUrl: urlScripts.partials + 'posts/post.html',
        controller: 'postController as Post'
    })
    .when('/error', {
        templateUrl: urlScripts.partials + '404/404.html',
        controller: 'errorController as Error'
    })
    .otherwise({
        templateUrl: urlScripts.partials + '404/404.html',
        controller: 'errorController as Error'
    });

};


run.$inject = ['$rootScope', '$route', '$location'];
     
function run($rootScope, $route, $location) {

    $rootScope.urlScripts = urlScripts.partials;
    $rootScope.urlJSON = 'wp-json/';

};
