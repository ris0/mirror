app.controller('appCtrl', function($scope, $log, $state) {
    //create one listener on DOM that goes to factory to determine state conditions
    if (annyang) {
        // Let's define a command.
        console.log('Im starting Annyang')
        var commands = {
            'hello': function() { console.$log('Hello world!'); },
            'mirror mirror': function() { $state.go('foggy'); }
        };

        // Add our commands to annyang
        annyang.addCommands(commands);

        // Start listening.
        annyang.init()
        // annyang.start();
    }

});
