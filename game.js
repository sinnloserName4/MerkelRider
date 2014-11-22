var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update, render: render });

var arrowkeys;
var m;
var win;
var ObstaclesCollisionGroup;
var winFlagCollisionGroup;
var currentState;
var Obstacles;
var snow;

function preload()
{
    game.load.image("merkel", "content/merkel.jpg");
    game.load.image("chopper", "content/chopper.png");
    game.load.image("tire", "content/tire.png");
    game.load.image("start_button", "content/start_game.png");
    game.load.image("poller", "content/poller.png")
    game.load.image("rampe", "content/rampe.png");
    game.load.image("tinysnowflake", "content/tinysnowflake.png");
    game.load.image("mediumsnowflake", "content/mediumsnowflake.png");
    game.load.image("hugesnowflake", "content/hugesnowflake.png");

    game.time.advancedTiming = true;
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

function render()
{
    game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
}