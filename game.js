var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });

var arrowkeys;
var m;
var win;
var ObstaclesCollisionGroup;
var winFlagCollisionGroup;
var currentState;
var Obstacles;

function preload()
{
    game.load.image("merkel", "content/merkel.jpg");
    game.load.image("chopper", "content/chopper.png");
    game.load.image("rad", "content/rad.png");
    game.load.image("start_button", "content/start_game.png");
}

function create()
{
    Obstacles = new Array(100);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.gravity.y = 300;
    arrowkeys = game.input.keyboard.createCursorKeys();
    ObstaclesCollisionGroup = game.physics.p2.createCollisionGroup();
    winFlagCollisionGroup = game.physics.p2.createCollisionGroup();
    currentState = new MainMenu();        //start off with the main menu
}

function update()
{
    currentState.update();
}
