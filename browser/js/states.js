var app = angular.module("app", ["ui.router"])

app.config(function ($stateProvider) {
    $stateProvider.state("inactive", {
        url: "/",
        template: "",
        controller: "inactiveCtrl"
    })
    .state("foggy", {
        url: "/foggy",
        template: "",
        controller: "foggyCtrl"
    })
    .state("active", {
    url: "/active",
    template: "",
    controller: "activeCtrl"
    })
})