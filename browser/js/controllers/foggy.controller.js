app.controller('foggyCtrl', function($scope) {


    // console.log("starting");

    // //scene
    // scene = new THREE.Scene();
    // //camera
    // var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.set(0, -13, 5);
    // camera.lookAt(new THREE.Vector3(0, 5, 0));

    // //renderer
    // var renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);

    // //controls
    // var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // //show canvas
    // $("#canvas-container").html(renderer.domElement);


    // //directional light
    // var directionalLight = new THREE.DirectionalLight(0xffffff);
    // directionalLight.position.set(6, 0, 6);
    // scene.add(directionalLight);

    // //sphere
    // //SphereGeometry(RADIUS,SEGMENTWIDTH,SEGMENTHEIGHT)
    // var geometry = new THREE.SphereGeometry(3, 10, 10);
    // var material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x555555 });
    // var sphere = new THREE.Mesh(geometry, material);
    // sphere.position.set(0, 0, 1);
    // scene.add(sphere);


    // //grid xy
    // var gridXY = new THREE.GridHelper(10, 1);
    // gridXY.rotation.x = Math.PI / 2;
    // scene.add(gridXY);



    // //particle
    // //smoke bomb
    // var settings = {
    //     positionStyle: Type.SPHERE,
    //     positionBase: new THREE.Vector3(0, 0, 1),
    //     positionRadius: 1,

    //     velocityStyle: Type.SPHERE,
    //     speedBase: 2,
    //     speedSpread: 4,

    //     particleTexture: THREE.ImageUtils.loadTexture('http://vignette3.wikia.nocookie.net/roblox/images/c/c6/Smoke.png/revision/latest?cb=20091213220753'),

    //     sizeTween: new Tween([0, 4], [5, 10]),
    //     opacityTween: new Tween([0, 5], [0.6, 0.3]),
    //     colorTween: new Tween([0.2, 1], [new THREE.Vector3(0.0, 0, 1), new THREE.Vector3(0.05, 0, 0.5)]),

    //     particlesPerSecond: 100,
    //     particleDeathAge: 4,
    //     emitterDeathAge: 60
    // };

    // engine = new ParticleEngine();
    // engine.setValues(settings);
    // engine.initialize();



    // //render scene
    // var render = function() {
    //     requestAnimationFrame(render);
    //     renderer.render(scene, camera);

    //     engine.update(0.01 * 0.5);
    // };

    // render();

		// var renderer, scene, camera;

		// var particleSystem, uniforms, geometry;

		// var particles = 100000;

		// var WIDTH = window.innerWidth;
		// var HEIGHT = window.innerHeight;

		// init();
		// animate();

		// function init() {

		// 	camera = new THREE.PerspectiveCamera( 40, WIDTH / HEIGHT, 1, 10000 );
		// 	camera.position.z = 300;

		// 	scene = new THREE.Scene();

		// 	uniforms = {

		// 		color:     { type: "c", value: new THREE.Color( 0xffffff ) },
		// 		texture:   { type: "t", value: new THREE.TextureLoader().load( "textures/sprites/spark1.png" ) }

		// 	};

		// 	var shaderMaterial = new THREE.ShaderMaterial( {

		// 		uniforms:       uniforms,
		// 		vertexShader:   document.getElementById( 'vertexshader' ).textContent,
		// 		fragmentShader: document.getElementById( 'fragmentshader' ).textContent,

		// 		blending:       THREE.AdditiveBlending,
		// 		depthTest:      false,
		// 		transparent:    true

		// 	});


		// 	var radius = 200;

		// 	geometry = new THREE.BufferGeometry();

		// 	var positions = new Float32Array( particles * 3 );
		// 	var colors = new Float32Array( particles * 3 );
		// 	var sizes = new Float32Array( particles );

		// 	var color = new THREE.Color();

		// 	for ( var i = 0, i3 = 0; i < particles; i ++, i3 += 3 ) {

		// 		positions[ i3 + 0 ] = ( Math.random() * 2 - 1 ) * radius;
		// 		positions[ i3 + 1 ] = ( Math.random() * 2 - 1 ) * radius;
		// 		positions[ i3 + 2 ] = ( Math.random() * 2 - 1 ) * radius;

		// 		color.setHSL( i / particles, 1.0, 0.5 );

		// 		colors[ i3 + 0 ] = color.r;
		// 		colors[ i3 + 1 ] = color.g;
		// 		colors[ i3 + 2 ] = color.b;

		// 		sizes[ i ] = 20;

		// 	}

		// 	geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );
		// 	geometry.addAttribute( 'customColor', new THREE.BufferAttribute( colors, 3 ) );
		// 	geometry.addAttribute( 'size', new THREE.BufferAttribute( sizes, 1 ) );

		// 	particleSystem = new THREE.Points( geometry, shaderMaterial );

		// 	scene.add( particleSystem );

		// 	renderer = new THREE.WebGLRenderer();
		// 	renderer.setPixelRatio( window.devicePixelRatio );
		// 	renderer.setSize( WIDTH, HEIGHT );

		// 	var container = document.getElementById( 'container' );
		// 	container.appendChild( renderer.domElement );

		// 	//

		// 	window.addEventListener( 'resize', onWindowResize, false );

		// }

		// function onWindowResize() {

		// 	camera.aspect = window.innerWidth / window.innerHeight;
		// 	camera.updateProjectionMatrix();

		// 	renderer.setSize( window.innerWidth, window.innerHeight );

		// }

		// function animate() {

		// 	console.log("animatin'");

		// 	requestAnimationFrame( animate );

		// 	render();

		// }

		// function render() {

		// 	var time = Date.now() * 0.005;

		// 	particleSystem.rotation.z = 0.01 * time;

		// 	var sizes = geometry.attributes.size.array;

		// 	for ( var i = 0; i < particles; i++ ) {

		// 		sizes[ i ] = 10 * ( 1 + Math.sin( 0.1 * i + time ) );

		// 	}

		// 	geometry.attributes.size.needsUpdate = true;

		// 	renderer.render( scene, camera );
		// }

		var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			var render = function () {
				requestAnimationFrame( render );

				cube.rotation.x += 0.1;
				cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();

});
