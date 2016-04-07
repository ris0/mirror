    app.controller('appCtrl', function($scope, $log, $state) {
        //create one listener on DOM that goes to factory to determine state conditions
        if (annyang) {
            // Let's define a command.
            var commands = {
                'hello': function() { alert('Hello world!'); },
                'mirror mirror': function() {
                    console.log("State dot goin");
                    $state.go('foggy'); }
            };

            // Add our commands to annyang
            annyang.addCommands(commands);

            // Start listening.
            annyang.start();
        }

    });
