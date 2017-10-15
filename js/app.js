angular.module("myApp",["ionic","myApp.controller"])
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state("content",{
                url:"/content",
                templateUrl:"views/content.html",
                abstract:true
            })
            .state("content.tab",{
                url:"/tab",
                views:{
                    tab:{
                        templateUrl:"views/tab.html"
                    }
                }
            })
            .state("content.tab.home",{
                url:"/home",
                views:{
                    home:{
                        templateUrl:"views/home.html",
                        controller:"HomeC"
                    }
                }
            })
            .state("content.tab.type",{
                url:"/type",
                views:{
                    type:{
                        templateUrl:"views/type.html",
                        controller:"TypeC"

                    }
                }
            })
            .state("content.tab.sCar",{
                url:"/sCar",
                views:{
                    sCar:{
                        templateUrl:"views/sCar.html",
                        controller:"sCarC"

                    }
                }
            })
            .state("content.tab.mine",{
                url:"/mine",
                views:{
                    mine:{
                        templateUrl:"views/mine.html",
                        controller:"MineC"

                    }
                }
            });
        $urlRouterProvider.otherwise("content/tab/home");
    }]);