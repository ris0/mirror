// api key : AIzaSyAANXryNsjBUv-uDDqn4U_4N-T40gq3ZLo

app.factory('Gmap', function($http) {
    var Gmap = {};


    Gmap.getDirections = function () {
        console.log("who is first????????")
        return $http.get('/api/directions')
            .then(function (response) {
                var directions = response.data;
                return directions;
            })
    };

    return Gmap
});
