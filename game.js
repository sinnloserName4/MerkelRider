var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });

var arrowkeys;
var m;
var rampe;
var ObstaclesCollisionGroup;

function preload()
{
    game.load.image("merkel", "content/merkel.jpg");
    game.load.image("chopper", "content/chopper.png");
    game.load.image("rad", "content/rad.png");
}

function create()
{
    
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 300;
    ObstaclesCollisionGroup = game.physics.p2.createCollisionGroup();
    arrowkeys = game.input.keyboard.createCursorKeys();
    m = new Merkel(300, 450);
    rampe = new Rampe(200, 200);
}

function update()
{
    m.handleInput();
}
