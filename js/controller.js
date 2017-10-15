angular.module("myApp.controller",[])
    .controller("HomeC",["$scope",function($scope){

    }])
    .controller("TypeC",["$scope",function($scope){

    }])
    //购物车控制器
    .controller("sCarC",["$scope","$http",function($scope,$http){
        //$http 请求数据
        $http.get("message.json").success(function (data) {
            $scope.mine.dataList = data.data;
            });
        //找到需要的元素 添加索引 并且返回索引
        var findIndex=function(id){
            var index=-1;
            angular.forEach($scope.mine.dataList,function(item,key){
                if(item.id == id){
                    index=key;
                    return;
                }
            });
            return index;
        };
        //给商品添加一个数量
        $scope.addOne=function(id){
            var index=findIndex(id);
            if(index != -1){
                $scope.mine.dataList[index].count++;
            }
        };
        //给商品减去一个数量
        $scope.reduceOne=function(id){
            var index=findIndex(id);
            if(index != -1){
                var item=$scope.mine.dataList[index];
                if(item.count > 1){
                    item.count--;
                }else{
                    item.count = 1;
                }
            }
        };
        //计算所有选中商品的总价钱
        $scope.sumPrice = function(){
            var total = 0;
            for(var i = 0;i<$scope.mine.dataList.length;i++){
                if(!$scope.mine.dataList[i].state){
                    continue;
                }else{
                     total += $scope.mine.dataList[i].count * $scope.mine.dataList[i].goodsPrice;
                }

            }
            return total;
        };
        $scope.mine = {
            dataList: "",
            sum:"",
            flag:function(a,b){
               $scope.mine.dataList[b].state = a;
            },
            //全选
            allSelect:function(flag){
                angular.forEach($scope.mine.dataList,function(item,index){
                    item.state = flag;
                })
            }
            }
    }])
    .controller("MineC",["$scope",function($scope){

    }])
    .controller("TabC",["$scope",function($scope){
       
    }]);