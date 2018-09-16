var formApp = angular.module('formApp', ['ngMessages','ui.bootstrap']);

/**
*   @desc - Angular Controller For Form Validation
*   @author - Edward Stansfield - 2017
*/

/**
@function - Main Controller - has all the variables used in the 2 data binding
*/
formApp.controller('mainController',['$scope','$modal', function($scope,$modal){
    
    'use strict';
    
    /** Variables **/
    $scope.name = '';
    $scope.password = '';
    $scope.email = '';
    $scope.message = '';
    $scope.age = 18;                //default of 18
    $scope.rating = 0;
    $scope.message_max = 50;
   
    /** Functions **/
    
    /**
    *   @function - test function console.logs out all variables
    */
    $scope.test = function(){
        
        console.log($scope.name);
        console.log($scope.rating);
        console.log($scope.password);
        console.log($scope.email);
        console.log($scope.message);
        console.log($scope.age);
        
    }
    
    /**
    @function - called on succesful validation in view - simply calls a modal from ui-bootstrap - does no backend additional validation etc - that would be handled via a rest call to php or similar
    */
    $scope.submit = function(){
                         
         var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: ModalInstanceCtrl,
            scope: $scope,
            resolve:{                       //pass the data to the modal controller to be displayed there
                name: function(){
                    return $scope.name;
                },
                rating: function(){
                    return $scope.rating;
                },
                password: function(){
                    return $scope.password;
                },
                email: function(){
                    return $scope.email;
                },
                message: function(){
                    return $scope.message;
                },
                age: function(){
                    return $scope.age;
                },
            }
            
        });
        
    };
    
}]);

/**
    @function - Modal Controller
*/
var ModalInstanceCtrl = function ($scope, $modalInstance,name,rating,password,email,message,age) {
    
    $scope.success_message = 'Form Submitted Succesfully!';
    
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
    
    $scope.ok = function(){
        $modalInstance.close();
    }
};