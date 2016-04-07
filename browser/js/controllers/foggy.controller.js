

app.controller('foggyCtrl', function($scope, $state) {

    var camera, scene, renderer;
    var pointLight, pointLight2;
    var torusKnot;
    var cubeMaterial;
    var wallMaterial;
    var ground;

    init();
    animate();


    function init() {

        initScene();
        initMisc();

        document.body.appendChild( renderer.domElement );
        window.addEventListener( 'resize', onWindowResize, false );

    }

    function initScene() {

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.set( 0, 10, 40 );

        scene = new THREE.Scene();
        scene.add( new THREE.AmbientLight( 0x222233 ) );

        // Lights

        function createLight( color ) {

            var pointLight = new THREE.PointLight( color, 1, 30 );
            pointLight.castShadow = true;
            pointLight.shadowCameraNear = 1;
            pointLight.shadowCameraFar = 30;
            // pointLight.shadowCameraVisible = true;
            pointLight.shadowBias = 0.01;

            var geometry = new THREE.SphereGeometry( 0.3, 32, 32 );
            var material = new THREE.MeshBasicMaterial( { color: color } );
            var sphere = new THREE.Mesh( geometry, material );
            pointLight.add( sphere );

            return pointLight

        }

        pointLight = createLight( 0xffffff );
        scene.add( pointLight );

        pointLight2 = createLight( 0xff0000 );
        scene.add( pointLight2 );

        var rgb = new THREE.Color("rgb(100%, 100%, 100%)");
        cubeMaterial = new THREE.MeshPhongMaterial( {
            color: rgb,
            shininess: 100,
            specular: 0x222222
        } );

        var torusGeometry =  new THREE.TorusKnotGeometry( 12, 1, 125, 15 );
        torusKnot = new THREE.Mesh( torusGeometry, cubeMaterial );
        torusKnot.position.set( 0, 5, 0 );
        torusKnot.castShadow = true;
        torusKnot.receiveShadow = true;
        scene.add( torusKnot );

        wallMaterial = new THREE.MeshPhongMaterial( {
            color: 000000,
            shininess: 100,
            specular: 0x111111,
            shading: THREE.SmoothShading
        } );

        var wallGeometry = new THREE.BoxGeometry( 8, 0.15, 8 );
        ground = new THREE.Mesh( wallGeometry, wallMaterial );
        ground.position.set( 0, -5, 0 );
        ground.scale.multiplyScalar( 3 );
        ground.receiveShadow = true;
        scene.add( ground );

        var ceiling = new THREE.Mesh( wallGeometry, wallMaterial );
        ceiling.position.set( 0, 24, 0 );
        ceiling.scale.multiplyScalar( 3 );
        ceiling.receiveShadow = true;
        scene.add( ceiling );

        var wall = new THREE.Mesh( wallGeometry, wallMaterial );
        wall.position.set( -14, 10, 0 );
        wall.rotation.z = Math.PI / 2;
        wall.scale.multiplyScalar( 3 );
        wall.receiveShadow = true;
        scene.add( wall );

        wall = new THREE.Mesh( wallGeometry, wallMaterial );
        wall.position.set( 14, 10, 0 );
        wall.rotation.z = Math.PI / 2;
        wall.scale.multiplyScalar( 3 );
        wall.receiveShadow = true;
        scene.add( wall );

        wall = new THREE.Mesh( wallGeometry, wallMaterial );
        wall.position.set( 0, 10, -14 );
        wall.rotation.y = Math.PI / 2;
        wall.rotation.z = Math.PI / 2;
        wall.scale.multiplyScalar( 3 );
        wall.receiveShadow = true;
        scene.add( wall );

    }

    function initMisc() {

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor( 0x000000 );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.BasicShadowMap;

        // Mouse control
        controls = new THREE.OrbitControls( camera, renderer.domElement );
        controls.target.set( 0, 10, 0 );
        controls.update();
    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    function animate() {

        requestAnimationFrame( animate );
        render();
    }

    function renderScene() {

        renderer.render( scene, camera );

    }

    function render() {

        var time = performance.now() * 0.001;

        pointLight.position.x = Math.sin( time ) * 9;
        pointLight.position.y = Math.sin( time * 1.1 ) * 9 + 5;
        pointLight.position.z = Math.sin( time * 1.2 ) * 9;

        time += 10000;

        pointLight2.position.x = Math.sin( time ) * 9;
        pointLight2.position.y = Math.sin( time * 1.1 ) * 9 + 5;
        pointLight2.position.z = Math.sin( time * 1.2 ) * 9;

        renderScene();

        torusKnot.rotation.y = time * 0.1;

    }

      // face detection events

    function loadFace () {
      var canvas = document.getElementById("inputCanvas");
      var context = canvas.getContext("2d");
      var videoInput = document.getElementById('inputVideo');
      var canvasInput = document.getElementById('inputCanvas');
            console.log(canvas, context, videoInput, canvasInput)
      var threejs = document.getElementById("container");

      var htracker = new headtrackr.Tracker({ui : false});
      htracker.init(videoInput, canvasInput);
      htracker.start();

      document.addEventListener("headtrackrStatus", function (event) {
        //console.log(event);
        if (event.status === "lost") {
          console.log('lost');
        }
        if (event.status === "found") {
          console.log('found');
          //$('#demo-container').remove();

          //document.body.removeChild( canvas );

            setTimeout(function() {
                document.body.removeChild( renderer.domElement );
                $state.go("active");
            }, 5000);

        }
      });

    }

    loadFace();

});
