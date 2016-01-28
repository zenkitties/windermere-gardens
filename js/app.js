(function(angular) {
    "use strict";

var app = angular.module('zenApp', []);
    
    app.controller('TestimonialController', function($scope){
        $scope.testimonials = [
            {
            testimony: 'After careful consideration we chose Windermere Gardens and we could not be more pleased with the service. Their loving approach to taking care of my mom couldn\'t be more appreciated.',
            person: 'Lauren (client\'s daughter)'
            },
            {
            testimony: 'My father had a bad experience at a local facility and we were very reluctant in choosing a new care giver. After hiring Windermere Gardens they took a major load off and have finally given my family the piece of mind we\'ve been hoping for. Thanks Windermere!!!',
            person: 'David (client\'s son)'
            },
            {
            testimony: 'We couldn\'t be more happy with your service.',
            person: 'Michael (client\'s husband)'
            }     
        ]
    
    });

})(window.angular);