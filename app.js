var scene, renderer, camera, controls;
var Pieces = {};
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
		3 : ["blackKnight1", "c6"],
		4 : ["whiteBishop2", "c4"],
		5 : ["blackBishop2", "c5"],
		6 : ["whitePawn3", "c3"],
		7 : ["blackKnight2", "f6"],
		8 : ["whitePawn4", "d4"],
		9 : ["blackPawn5", "d4"],
		10 : ["whitePawn2", "b4"],
		11 : ["blackBishop2", "b6"],
		12 : ["whitePawn5", "e5"],
		13 : ["blackKnight2", "e4"],
		14 : ["whiteBishop2", "d5"],
		15 : ["blackKnight2", "c3"],
		16 : ["whiteKnight1", "c3"],
		17 : ["blackPawn5", "c3"],
		18 : ["whiteBishop1", "g5"],
		19 : ["blackKnight1", "e7"],
		20 : ["whiteKing", "g1", "castle", "whiteRook2", "f1"],
		21 : ["blackPawn8", "h6"],
		22 : ["whiteBishop1", "h4"],
		23 : ["blackKing", "g8", "castle", "blackRook2", "f8"],
		24 : ["whiteRook2", "e1"],
		25 : ["blackQueen", "e8"],
		26 : ["whiteBishop2", "b3"],
		27 : ["blackPawn1", "a5"],
		28 : ["whiteBishop1", "f6"],
		29 : ["blackPawn1", "a4"],
		30 : ["whiteBishop2", "c4"],
		31 : ["blackKnight1", "g6"],
		32 : ["whiteQueen", "d3"],
		33 : ["blackPawn4", "d5"],
		34 : ["whitePawn5", "d6", "erase", "blackPawn4", "d5"],
		35 : ["blackBishop1", "e6"],
		36 : ["whiteQueen", "g6"],
		37 : ["blackPawn6", "g6"],
		38 : ["whiteRook2", "e6"],
		39 : ["blackQueen", "f7"],
		40 : ["whiteBishop1", "c3"],
		41 : ["blackKing", "h8"],
		42 : ["whiteRook2", "e4"],
		43 : ["blackQueen", "f5"],
		44 : ["whiteRook2", "e7"],
		45 : ["blackRook2", "g8"],
		46 : ["whiteBishop2", "g8"],
		47 : ["blackRook1", "g8"],
		48 : ["whitePawn5", "c7"],
		49 : ["blackQueen", "c2"],
		50 : ["whiteBishop1", "e5"],
		51 : ["blackBishop2", "f2"],
		52 : ["whiteKing", "h1"],
		53 : ["blackBishop2", "b6"],
		54 : ["whitePawn8", "h3"],
		55 : ["blackKing", "h7"],
		56 : ["whiteRook1", "e1"],
		57 : ["blackPawn1", "a3"],
		58 : ["whiteKing", "h2"],
		59 : ["blackPawn6", "g5"],
		60 : ["whiteKnight2", "d4"],
		61 : ["blackQueen", "c4"],
		62 : ["whiteKnight2", "f5"],
		63 : ["blackQueen", "b4"],
		64 : ["whiteRook1", "c1"],
		65 : ["blackKing", "g6"],
		66 : ["whiteRook2", "g7"],
		67 : ["blackKing", "f5"],
		68 : ["whiteRook2", "g8"],
		69 : ["blackBishop2", "c7"],
		70 : ["whiteBishop1", "c7"],
		71 : ["blackQueen", "b2"],
		72 : ["whiteRook1", "c5"],
		73 : ["blackKing", "e4"],
		74 : ["whiteRook2", "d8"]
	}
};

var start = document.getElementById('start')
var stop = document.getElementById('stop')
var restart = document.getElementById('restart')

init();
animate();
initialBoard();

//Load piece
function createPiece(color, name, pos, dicName){
	const objLoader = new THREE.OBJLoader();
    objLoader.load('./assets/objects/'+name+'.obj', (object) => {
	
	if(color=="white"){
		color = 0xFFFFFF
	}
	else{
		color = 0x444444
	}
		
	object.traverse( function (obj) {
		if (obj.isMesh){
			obj.material.color.set(color);
		}
	} );
				
		   Pieces[dicName] = object;
		   Pieces[dicName].position.x = boardPositions[pos].x;
		   Pieces[dicName].position.z = boardPositions[pos].z;
		   Pieces[dicName].position.y = boardPositions.y[name];
		   Pieces[dicName].scale.set(10,10,10)
		   Pieces[dicName].whereami = pos;
		   boardPositions[pos].status = true;
		   boardPositions[pos].piece = dicName;
			scene.add(Pieces[dicName])
	  });
}

//Move piece with delay for the animation.
async function moveAnimation(namePiece, newSpot){
	const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
	
	var speedX = 1;
	var speedZ = 1;
	var newX = parseInt(newSpot.x)
	var newZ = parseInt(newSpot.z)

	while(Pieces[namePiece].position.x!=newX || Pieces[namePiece].position.z!= newZ){
		if(Pieces[namePiece].position.x>newSpot.x){
			speedX = - 1;
		}

		if(Pieces[namePiece].position.z>newSpot.z){
			speedZ = -1;
		}
		if(Pieces[namePiece].position.x!=newX){
			Pieces[namePiece].position.x += speedX;
		}
		if(Pieces[namePiece].position.z!= newZ){
			Pieces[namePiece].position.z += speedZ;
		}
		await sleep(0.1);
	}
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
	
	//move piece to the new spot
	moveAnimation(namePiece, boardPositions[newSpot])	

	//If there is a piece in the new spot, erase piece.
	if(boardPositions[newSpot].status){
		erasePiece(newSpot)
	}

	//update values
	boardPositions[lastSpot].status = false //clear last spot
	Pieces[namePiece].whereami = newSpot; //New spot updated
	boardPositions[newSpot].piece = namePiece //New piece in the board spot
	boardPositions[newSpot].status = true //ocupate new spot
}

function loadGame(game, i){
	if(games[game]){
		if(games[game][i][2]=="castle"){
			nextMove(games[game][i][0], games[game][i][1]);
			nextMove(games[game][i][3], games[game][i][4]);
		}
		else if(games[game][i][2]=="erase"){
			nextMove(games[game][i][0], games[game][i][1]);
			erasePiece(games[game][i][4])
		}
		else{
			nextMove(games[game][i][0], games[game][i][1]);
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

	//Camara
    camera = new THREE.PerspectiveCamera (45, width/height, 1, 10000);
    camera.position.y = 250;
    camera.position.z = 400;
    camera.lookAt (new THREE.Vector3(0,0,0));
    controls = new THREE.OrbitControls (camera, renderer.domElement);
	
	//View helper
    // var gridXZ = new THREE.GridHelper(400, 15);
    // gridXZ.setColors( new THREE.Color(0xff0000), new THREE.Color(0xffffff) );
    // scene.add(gridXZ);
}

var x = 0;
//Next move
start.onclick = function () {
	loadGame('g1', x);
	x++;
}

restart.onclick = function (){
	window.location.reload();
}


function animate(time)
{
    controls.update();
	requestAnimationFrame(animate); 
	TWEEN.update(time)
	renderer.render (scene, camera);
}

