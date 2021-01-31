var scene, renderer, camera;
var cube;
var controls;
var boardPositions = { 
	"y":{"pawn": 3,"queen":30, "knight":10, "bishop":3, "king":32, "rook":20},
	"a1":{ "x": -130, "y": 30, "z": 135 },
	"b1":{ "x": -95, "y": 30, "z": 135 },
	"c1":{ "x": -55, "y": 30, "z": 135 },
	"d1":{ "x": -20, "y": 30, "z": 135 },
	"e1":{ "x": 20, "y": 30, "z": 135 },
	"f1":{ "x": 55, "y": 30, "z": 135 },
	"g1":{ "x": 95, "y": 30, "z": 135 },
	"h1":{ "x": 130, "y": 30, "z": 135 },
	"a2":{ "x": -130, "y": 30, "z": 100 },
	"b2":{ "x": -95, "y": 30, "z": 100 },
	"c2":{ "x": -55, "y": 30, "z": 100 },
	"d2":{ "x": -20, "y": 30, "z": 100 },
	"e2":{ "x": 20, "y": 30, "z": 100 },
	"f2":{ "x": 55, "y": 30, "z": 100 },
	"g2":{ "x": 95, "y": 30, "z": 100 },
	"h2":{ "x": 130, "y": 30, "z": 100 },
	"a3":{ "x": -130, "y": 30, "z": 60 },
	"b3":{ "x": -95, "y": 30, "z": 60 },
	"c3":{ "x": -55, "y": 30, "z": 60 },
	"d3":{ "x": -20, "y": 30, "z": 60 },
	"e3":{ "x": 20, "y": 30, "z": 60 },
	"f3":{ "x": 55, "y": 30, "z": 60 },
	"g3":{ "x": 95, "y": 30, "z": 60 },
	"h3":{ "x": 130, "y": 30, "z": 60 },
	"a4":{ "x": -130, "y": 30, "z": 20 },
	"b4":{ "x": -95, "y": 30, "z": 20 },
	"c4":{ "x": -55, "y": 30, "z": 20 },
	"d4":{ "x": -20, "y": 30, "z": 20 },
	"e4":{ "x": 20, "y": 30, "z": 20 },
	"f4":{ "x": 55, "y": 30, "z": 20 },
	"g4":{ "x": 95, "y": 30, "z": 20 },
	"h4":{ "x": 130, "y": 30, "z": 20 },
	"a5":{ "x": -130, "y": 30, "z": -20 },
	"b5":{ "x": -95, "y": 30, "z": -20 },
	"c5":{ "x": -55, "y": 30, "z": -20 },
	"d5":{ "x": -20, "y": 30, "z": -20 },
	"e5":{ "x": 20, "y": 30, "z": -20 },
	"f5":{ "x": 55, "y": 30, "z": -20 },
	"g5":{ "x": 95, "y": 30, "z": -20 },
	"h5":{ "x": 130, "y": 30, "z": -20 },
	"a6":{ "x": -130, "y": 30, "z": -55 },
	"b6":{ "x": -95, "y": 30, "z": -55 },
	"c6":{ "x": -55, "y": 30, "z": -55 },
	"d6":{ "x": -20, "y": 30, "z": -55 },
	"e6":{ "x": 20, "y": 30, "z": -55 },
	"f6":{ "x": 55, "y": 30, "z": -55 },
	"g6":{ "x": 95, "y": 30, "z": -55 },
	"h6":{ "x": 130, "y": 30, "z": -55 },
	"a7":{ "x": -130, "y": 30, "z": -95 },
	"b7":{ "x": -95, "y": 30, "z": -95 },
	"c7":{ "x": -55, "y": 30, "z": -95 },
	"d7":{ "x": -20, "y": 30, "z": -95 },
	"e7":{ "x": 20, "y": 30, "z": -95 },
	"f7":{ "x": 55, "y": 30, "z": -95 },
	"g7":{ "x": 95, "y": 30, "z": -95 },
	"h7":{ "x": 130, "y": 30, "z": -95 },
	"a8":{ "x": -130, "y": 30, "z": -130 },
	"b8":{ "x": -95, "y": 30, "z": -130 },
	"c8":{ "x": -55, "y": 30, "z": -130 },
	"d8":{ "x": -20, "y": 30, "z": -130 },
	"e8":{ "x": 20, "y": 30, "z": -130 },
	"f8":{ "x": 55, "y": 30, "z": -130 },
	"g8":{ "x": 95, "y": 30, "z": -130 },
	"h8":{ "x": 130, "y": 30, "z": -130 }
	}

init();
animate();

function createPiece(color, name, pos){
	const mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./assets/objects/'+color+'.mtl', (mtl) => {
      mtl.preload();
	  const objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load('./assets/objects/'+name+'.obj', (object) => {
		   mesh = object;
		   mesh.position.y = boardPositions.y[name];
		   mesh.position.x = boardPositions[pos].x;
		   mesh.position.z = boardPositions[pos].z;
		   mesh.scale.set(10,10,10)
		scene.add(mesh);
		return mesh;
      });
	});
} 

function initialBoard()
{
	
	//White pieces
	var whiteRook1 = createPiece("white", "rook","a1");
	var whiteRook2 = createPiece("white","rook","h1");
	var whiteKnight1 = createPiece("white","knight","b1");
	var whiteKnight2 = createPiece("white","knight","g1");
	var whiteBishop1 = createPiece("white","bishop","c1");
	var whiteBishop2 = createPiece("white","bishop","f1");
	var whiteQueen = createPiece("white","queen","d1");
	var whiteKing = createPiece("white","king","e1");
	var whitePawns = [];
	j=1;
	for(i=97; i<105; i++){
		whitePawns[j] = createPiece("white",'pawn', String.fromCharCode(i)+"2");
		j++;
	}
	// //Black pieces
	var blackRook1 = createPiece("black", "rook","a8");
	var blackRook2 = createPiece("black","rook","h8");
	var blackKnight1 = createPiece("black","knight","b8");
	var blackKnight2 = createPiece("black","knight","g8");
	var blackBishop1 = createPiece("black","bishop","c8");
	var blackBishop2 = createPiece("black","bishop","f8");
	var blackQueen = createPiece("black","queen","d8");
	var blackKing = createPiece("black","king","e8");
	var blackPawns = [];
	j=1;
	for(i=97; i<105; i++){
		blackPawns[j] = createPiece("black",'pawn', String.fromCharCode(i)+"7");
		j++;
	}

}


function init()
{
	
    renderer = new THREE.WebGLRenderer( {antialias:true} );
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize (width, height);
    document.body.appendChild (renderer.domElement);

	//scene background
	scene = new THREE.Scene();
	const texture = new THREE.TextureLoader().load("assets/textures/darkwood.jpg" );
	scene.background = texture

	//Chess board
    var boardGeometry = new THREE.BoxGeometry (350,2,350);
    var boardMaterial = new THREE.MeshBasicMaterial ();
    board = new THREE.Mesh (boardGeometry, boardMaterial);
    board.position.set (0, 0, 0);
	scene.add (board);
	//Board texture
	boardMaterial.map = THREE.ImageUtils.loadTexture('./assets/textures/completeBoard.png');

	//Light
	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
	directionalLight.position.set( 0, 0, 1 ).normalize();
	scene.add( directionalLight );

	
	//Obj Pieces Load
	// instantiate a loader
	// model
	initialBoard()
	



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