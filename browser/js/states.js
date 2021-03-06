

app.config(function ($stateProvider) {
    $stateProvider.state("inactive", {
        url: "/",
        template: "",
        controller: "inactiveCtrl"
    })
    .state("foggy", {
        url: "/foggy",
        templateUrl: "/js/foggy.template.html",
        controller: "foggyCtrl"
    })
    .state("active", {
        url: "/active",
        templateUrl: "/js/active.template.html",
        controller: "activeCtrl",
        resolve: {
            gTransit: function (Gmap) {
                return Gmap.getDirections();
            }
        }
    });
});