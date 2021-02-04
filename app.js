var scene, renderer, camera, controls;

var Pieces = {
};

var boardPositions = { 
	"y":{"pawn": 3,"queen":30, "knight":10, "bishop":3, "king":32, "rook":20},
	"a1":{ "x": -130, "y": 30, "z": 135, "status":false },
	"b1":{ "x": -95, "y": 30, "z": 135, "status":false },
	"c1":{ "x": -55, "y": 30, "z": 135, "status":false },
	"d1":{ "x": -20, "y": 30, "z": 135, "status":false },
	"e1":{ "x": 20, "y": 30, "z": 135, "status":false },
	"f1":{ "x": 55, "y": 30, "z": 135, "status":false },
	"g1":{ "x": 95, "y": 30, "z": 135, "status":false },
	"h1":{ "x": 130, "y": 30, "z": 135, "status":false },
	"a2":{ "x": -130, "y": 30, "z": 100, "status":false },
	"b2":{ "x": -95, "y": 30, "z": 100, "status":false },
	"c2":{ "x": -55, "y": 30, "z": 100, "status":false },
	"d2":{ "x": -20, "y": 30, "z": 100, "status":false },
	"e2":{ "x": 20, "y": 30, "z": 100, "status":false },
	"f2":{ "x": 55, "y": 30, "z": 100, "status":false },
	"g2":{ "x": 95, "y": 30, "z": 100, "status":false },
	"h2":{ "x": 130, "y": 30, "z": 100, "status":false },
	"a3":{ "x": -130, "y": 30, "z": 60, "status":false },
	"b3":{ "x": -95, "y": 30, "z": 60, "status":false },
	"c3":{ "x": -55, "y": 30, "z": 60, "status":false },
	"d3":{ "x": -20, "y": 30, "z": 60, "status":false },
	"e3":{ "x": 20, "y": 30, "z": 60, "status":false },
	"f3":{ "x": 55, "y": 30, "z": 60, "status":false },
	"g3":{ "x": 95, "y": 30, "z": 60, "status":false },
	"h3":{ "x": 130, "y": 30, "z": 60, "status":false },
	"a4":{ "x": -130, "y": 30, "z": 20, "status":false },
	"b4":{ "x": -95, "y": 30, "z": 20, "status":false },
	"c4":{ "x": -55, "y": 30, "z": 20, "status":false },
	"d4":{ "x": -20, "y": 30, "z": 20, "status":false },
	"e4":{ "x": 20, "y": 30, "z": 20, "status":false },
	"f4":{ "x": 55, "y": 30, "z": 20, "status":false },
	"g4":{ "x": 95, "y": 30, "z": 20, "status":false },
	"h4":{ "x": 130, "y": 30, "z": 20, "status":false },
	"a5":{ "x": -130, "y": 30, "z": -20, "status":false },
	"b5":{ "x": -95, "y": 30, "z": -20, "status":false },
	"c5":{ "x": -55, "y": 30, "z": -20, "status":false },
	"d5":{ "x": -20, "y": 30, "z": -20, "status":false },
	"e5":{ "x": 20, "y": 30, "z": -20, "status":false },
	"f5":{ "x": 55, "y": 30, "z": -20, "status":false },
	"g5":{ "x": 95, "y": 30, "z": -20, "status":false },
	"h5":{ "x": 130, "y": 30, "z": -20, "status":false },
	"a6":{ "x": -130, "y": 30, "z": -55, "status":false },
	"b6":{ "x": -95, "y": 30, "z": -55, "status":false },
	"c6":{ "x": -55, "y": 30, "z": -55, "status":false },
	"d6":{ "x": -20, "y": 30, "z": -55, "status":false },
	"e6":{ "x": 20, "y": 30, "z": -55, "status":false },
	"f6":{ "x": 55, "y": 30, "z": -55, "status":false },
	"g6":{ "x": 95, "y": 30, "z": -55, "status":false },
	"h6":{ "x": 130, "y": 30, "z": -55, "status":false },
	"a7":{ "x": -130, "y": 30, "z": -95, "status":false },
	"b7":{ "x": -95, "y": 30, "z": -95, "status":false },
	"c7":{ "x": -55, "y": 30, "z": -95, "status":false },
	"d7":{ "x": -20, "y": 30, "z": -95, "status":false },
	"e7":{ "x": 20, "y": 30, "z": -95, "status":false },
	"f7":{ "x": 55, "y": 30, "z": -95, "status":false },
	"g7":{ "x": 95, "y": 30, "z": -95, "status":false },
	"h7":{ "x": 130, "y": 30, "z": -95, "status":false },
	"a8":{ "x": -130, "y": 30, "z": -130, "status":false },
	"b8":{ "x": -95, "y": 30, "z": -130, "status":false },
	"c8":{ "x": -55, "y": 30, "z": -130, "status":false },
	"d8":{ "x": -20, "y": 30, "z": -130, "status":false },
	"e8":{ "x": 20, "y": 30, "z": -130, "status":false },
	"f8":{ "x": 55, "y": 30, "z": -130, "status":false },
	"g8":{ "x": 95, "y": 30, "z": -130, "status":false },
	"h8":{ "x": 130, "y": 30, "z": -130, "status":false }
};

var games = {
	"g1":{
		0 : ["whitePawn5","e4"],
		1 : ["blackPawn5", "e5"],
		2 : ["whiteKnight2", "f3"],
		3 : ["blackKnight1", "c6"]
	}
};


initialBoard();
init();
animate();


//Load piece
function createPiece(color, name, pos, dicName){
	const mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./assets/objects/'+color+'.mtl', (mtl) => {
      mtl.preload();
	  const objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(mtl);
      objLoader.load('./assets/objects/'+name+'.obj', (object) => {
		   Pieces[dicName] = object;
		   Pieces[dicName].position.x = boardPositions[pos].x;
		   Pieces[dicName].position.z = boardPositions[pos].z;
		   Pieces[dicName].position.y = boardPositions.y[name];
		   Pieces[dicName].scale.set(10,10,10)
		   Pieces[dicName].whereami = pos;
		   boardPositions[pos].status = true;
		   boardPositions[pos].piece = dicName;
		   scene.add(Pieces[dicName]);
	  });
	});
}

//Move piece with delay for the animation.
async function moveAnimation(namePiece, newSpot){
	const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
	
	var speedX = 0.5;
	var speedZ = 0.5;
	var newX = parseInt(newSpot.x)
	var newZ = parseInt(newSpot.z)

	if(Pieces[namePiece].position.x>newSpot.x){
		speedX = - 0.5;
	}

	if(Pieces[namePiece].position.z>newSpot.z){
		speedZ = -0.5;
	}
		if(Pieces[namePiece].position.x!=newX){
			Pieces[namePiece].position.x += speedX;
		}
		if(Pieces[namePiece].position.z!= newZ){
			Pieces[namePiece].position.z += speedZ;
		}
	await sleep(100);
}

//Erase piece
function erasePiece(spot){
	if(boardPositions[spot].status){
		console.log("erasing: "+boardPositions[spot].piece)
		Pieces[boardPositions[spot].piece].scale.set(0,0,0);
		Pieces[boardPositions[spot].piece].whereami = 'NA'
	}
}

function nextMove(namePiece, newSpot){
	var lastSpot = Pieces[namePiece].whereami;
	
	//console.log(boardPositions[newSpot].status)
	//If there is a piece in the new spot, erase piece.
	if(boardPositions[newSpot].status){
		//erasePiece(newSpot)
	}

	//move piece to the new spot
	moveAnimation(namePiece, boardPositions[newSpot])	

	//update values
	boardPositions[lastSpot].status = false //clear last spot
	Pieces[namePiece].whereami = newSpot; //New spot updated
	boardPositions[newSpot].piece = namePiece //New piece in the board spot
	boardPositions[newSpot].status = true //ocupate new spot
}

async function loadGame(game){
	const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
	if(games[game]){
		for(i = 0; i < 4; i++){
			nextMove(games[game][i][0], games[game][i][1])
			await sleep(8000);
		}
	}
}

//Empty board with initial piecies in order.
function initialBoard()
{
	
	//White pieces
	createPiece("white", "rook","a1", "whiteRook1");
	createPiece("white","rook","h1", "whiteRook2");
	createPiece("white","knight","b1", "whiteKnight1");
	createPiece("white","knight","g1", 'whiteKnight2');
	createPiece("white","bishop","c1", 'whiteBishop1');
	createPiece("white","bishop","f1", 'whiteBishop2');
	createPiece("white","queen","d1", 'whiteQueen');
	createPiece("white","king","e1", 'whiteKing');
	j=1;
	for(i=97; i<105; i++){
		createPiece("white",'pawn', String.fromCharCode(i)+"2", 'whitePawn'+j);
		j++;
	}
	//Black pieces
	createPiece("black", "rook","a8", 'blackRook1');
	createPiece("black","rook","h8", 'blackRook2');
	createPiece("black","knight","b8", 'blackKnight1');
	createPiece("black","knight","g8", 'blackKnight2');
	createPiece("black","bishop","c8", 'blackBishop1');
	createPiece("black","bishop","f8", 'blackBishop2');
	createPiece("black","queen","d8", 'blackQueen');
	createPiece("black","king","e8", 'blackKing');
	j=1;
	for(i=97; i<105; i++){
		createPiece("black",'pawn', String.fromCharCode(i)+"7", 'blackPawn'+j);
		j++;
	}	
}


function init()
{
	//Render fix with window
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
	boardMaterial.map = THREE.ImageUtils.loadTexture('./assets/textures/completeBoard.png');

	//Light
	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
	directionalLight.position.set( 0, 0, 1 ).normalize();
	scene.add(directionalLight);

	
	
	//Controls
	// var rightButton = new THREE.BoxGeometry(10,10,10);
	// var rightButtonMaterial = new THREE.MeshBasicMaterial();
	// rightButtonMesh = new THREE.Mesh(rightButton, rightButtonMaterial);
	// rightButtonMesh.position.set(100,150,10);
	// scene.add(rightButtonMesh);

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
	var timer = Date.now() * 0.00025;
    controls.update();
	requestAnimationFrame(animate); 
	//console.log(timer)
	loadGame('g1')
	renderer.render (scene, camera);
	
}

