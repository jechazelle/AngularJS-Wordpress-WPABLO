/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular
    .module('WPABLO')
    .factory('postsFactory', postsFactory);
    
    
postsFactory.$inject = ['$http', '$q', '$rootScope', '$location']; 

function postsFactory($http, $q, $rootScope, $location){
 
        var factory = {
            posts : false,
            getPosts : function(){
                var deferred = $q.defer();
                $http({method: 'GET', url: $rootScope.urlJSON + 'posts', params: {}})
                    .success(function(data, status){
                        factory.posts = data;
                        deferred.resolve(factory.posts);
                    })
                    .error(function(data, status){
                        deferred.reject('Impossible de récupérer les posts');
                    });
                return deferred.promise;
            },
            getPost : function(idPost){
                var deferred = $q.defer();
                $http({method: 'GET', url: $rootScope.urlJSON + 'posts/' + idPost})
                    .success(function(data, status){
                        factory.posts = data;
                        deferred.resolve(factory.posts);
                    })
                    .error(function(data, status){
                        $location.url('error'); 
                        factory.posts = "";
                        deferred.resolve(factory.posts);
                        //deferred.reject(factory.posts);
                    });
                return deferred.promise;
            }
        };
        return factory;
};
