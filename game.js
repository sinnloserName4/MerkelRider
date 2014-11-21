var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });

var arrowkeys;
var m;
var rampe;
var car;
var ObstaclesCollisionGroup;
var currentState;

function preload()
{
    game.load.image("merkel", "content/merkel.jpg");
    game.load.image("chopper", "content/chopper.png");
    game.load.image("rad", "content/rad.png");
    game.load.image("start_button", "content/start_game.png");
}

function create()
{
    currentState = new MainMenu();        //start off with the main menu
}

function update()
{
    currentState.update();
}
