var scene, renderer, camera;
var cube;
var controls;

init();
animate();

function init()
{
    renderer = new THREE.WebGLRenderer( {antialias:true} );
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize (width, height);
    document.body.appendChild (renderer.domElement);

	//scene background
	scene = new THREE.Scene();
	const texture = new THREE.TextureLoader().load( "assets/textures/darkwood.jpg" );
	scene.background = texture

	//Chess board
    var boardGeometry = new THREE.BoxGeometry (350,2,350);
    var boardMaterial = new THREE.MeshBasicMaterial ();
    board = new THREE.Mesh (boardGeometry, boardMaterial);
    board.position.set (0, 0, 0);
	scene.add (board);
	//Board texture
	boardMaterial.map = THREE.ImageUtils.loadTexture('./assets/textures/completeBoard.png');
	
	//Camara
    camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);
    camera.position.y = 250;
    camera.position.z = 400;
    camera.lookAt (new THREE.Vector3(0,0,0));

    controls = new THREE.OrbitControls (camera, renderer.domElement);
	
	//View helper
    var gridXZ = new THREE.GridHelper(400, 15);
    gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
    scene.add(gridXZ);

}

function animate()
{
    controls.update();
    requestAnimationFrame ( animate );  
    renderer.render (scene, camera);
}