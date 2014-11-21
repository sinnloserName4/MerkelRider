var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update });

var arrowkeys;

function preload() {
    game.load.image("merkel", "content/merkel.jpg");
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 300;
    arrowkeys = game.input.keyboard.createCursorKeys();
    var m = new Merkel();
}

function update() {
}
