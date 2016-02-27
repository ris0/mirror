app.controller('foggyCtrl', function($scope, $state) {

    var camera, scene, renderer, stats;
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

        cubeMaterial = new THREE.MeshPhongMaterial( {
            color: 0xff0000,
            shininess: 50,
            specular: 0x222222
        } );

        var torusGeometry =  new THREE.TorusKnotGeometry( 14, 1, 150, 20 );
        torusKnot = new THREE.Mesh( torusGeometry, cubeMaterial );
        torusKnot.position.set( 0, 5, 0 );
        torusKnot.castShadow = true;
        torusKnot.receiveShadow = true;
        scene.add( torusKnot );

        wallMaterial = new THREE.MeshPhongMaterial( {
            color: 0xa0adaf,
            shininess: 10,
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

        /*
         wall = new THREE.Mesh( wallGeometry, wallMaterial );
         wall.scale.multiplyScalar( 3 );
         wall.castShadow = false;
         wall.receiveShadow = true;
         scene.add( wall );
         wall.position.set( 0, 10, 14 );
         wall.rotation.y = Math.PI / 2;
         wall.rotation.z = Math.PI / 2;
         */

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
        stats.update();

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

    //var container;
    //        var camera, scene, renderer, particles, geometry, materials = [], parameters, i, h, color, size;
    //        var mouseX = 0, mouseY = 0;
    //
    //        var windowHalfX = window.innerWidth / 2;
    //        var windowHalfY = window.innerHeight / 2;
    //
    //        init();
    //        animate();
    //
    //        function init() {
    //
    //            container = document.createElement( 'div' );
    //            document.body.appendChild( container );
    //
    //            camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 3000 );
    //            camera.position.z = 1000;
    //
    //            scene = new THREE.Scene();
    //            scene.fog = new THREE.FogExp2( 0x000000, 0.007 );
    //
    //            geometry = new THREE.Geometry();
    //
    //            for ( i = 0; i < 20000; i ++ ) {
    //
    //                var vertex = new THREE.Vector3();
    //                vertex.x = Math.random() * 2000 - 1000;
    //                vertex.y = Math.random() * 2000 - 1000;
    //                vertex.z = Math.random() * 2000 - 1000;
    //
    //                geometry.vertices.push( vertex );
    //
    //            }
    //
    //            parameters = [
    //                [ [1, 1, 0.5], 5 ],
    //                [ [0.95, 1, 0.5], 4 ],
    //                [ [0.90, 1, 0.5], 3 ],
    //                [ [0.85, 1, 0.5], 2 ],
    //                [ [0.80, 1, 0.5], 1 ]
    //            ];
    //
    //            for ( i = 0; i < parameters.length; i ++ ) {
    //
    //                color = parameters[i][0];
    //                size  = parameters[i][1];
    //
    //                materials[i] = new THREE.PointsMaterial( { size: size } );
    //
    //                particles = new THREE.Points( geometry, materials[i] );
    //
    //                particles.rotation.x = Math.random() * 6;
    //                particles.rotation.y = Math.random() * 6;
    //                particles.rotation.z = Math.random() * 6;
    //
    //                scene.add( particles );
    //
    //            }
    //
    //            renderer = new THREE.WebGLRenderer();
    //            renderer.setPixelRatio( window.devicePixelRatio );
    //            renderer.setSize( window.innerWidth, window.innerHeight );
    //            container.appendChild( renderer.domElement );
    //
    //            document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //            document.addEventListener( 'touchstart', onDocumentTouchStart, false );
    //            document.addEventListener( 'touchmove', onDocumentTouchMove, false );
    //
    //            //
    //
    //            window.addEventListener( 'resize', onWindowResize, false );
    //
    //        }
    //
    //        function onWindowResize() {
    //
    //            windowHalfX = window.innerWidth / 2;
    //            windowHalfY = window.innerHeight / 2;
    //
    //            camera.aspect = window.innerWidth / window.innerHeight;
    //            camera.updateProjectionMatrix();
    //
    //            renderer.setSize( window.innerWidth, window.innerHeight );
    //
    //        }
    //
    //        function onDocumentMouseMove( event ) {
    //
    //            mouseX = event.clientX - windowHalfX;
    //            mouseY = event.clientY - windowHalfY;
    //
    //        }
    //
    //        function onDocumentTouchStart( event ) {
    //
    //            if ( event.touches.length === 1 ) {
    //
    //                event.preventDefault();
    //
    //                mouseX = event.touches[ 0 ].pageX - windowHalfX;
    //                mouseY = event.touches[ 0 ].pageY - windowHalfY;
    //
    //            }
    //
    //        }
    //
    //        function onDocumentTouchMove( event ) {
    //
    //            if ( event.touches.length === 1 ) {
    //
    //                event.preventDefault();
    //
    //                mouseX = event.touches[ 0 ].pageX - windowHalfX;
    //                mouseY = event.touches[ 0 ].pageY - windowHalfY;
    //
    //            }
    //
    //        }
    //
    //        //
    //
    //        function animate() {
    //
    //            requestAnimationFrame( animate );
    //
    //            render();
    //
    //        }
    //
    //        function render() {
    //
    //            var time = Date.now() * 0.0005;
    //
    //            camera.position.x += ( mouseX - camera.position.x ) * 0.05;
    //            camera.position.y += ( - mouseY - camera.position.y ) * 0.05;
    //
    //            camera.lookAt( scene.position );
    //
    //            for ( i = 0; i < scene.children.length; i ++ ) {
    //
    //                var object = scene.children[ i ];
    //
    //                if ( object instanceof THREE.Points ) {
    //
    //                    object.rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) );
    //
    //                }
    //
    //            }
    //
    //            for ( i = 0; i < materials.length; i ++ ) {
    //
    //                color = parameters[i][0];
    //
    //                h = ( 360 * ( color[0] + time ) % 360 ) / 360;
    //                materials[i].color.setHSL( h, color[0], color[0] );
    //
    //            }
    //
    //            renderer.render( scene, camera );
    //
    //        }

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
          // facefound = false;
        }
        if (event.status === "found") {
          document.body.removeChild( canvas );
          $state.go("active");
        }
      });

    }

    loadFace();

});
