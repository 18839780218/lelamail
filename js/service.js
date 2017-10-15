angular.module("myApp.service",[])
    .factory("Http",["$http",function($http){
        var url = "";
        var method = "";
        return {
            setUrl:function(urlStr){
                url = urlStr;
            },
            setMethod:function(methodStr){
                method = methodStr;
            },
            request:function(){
                return $http({
                    method: method,
                    url: url
                });
            }
        }
    }]);