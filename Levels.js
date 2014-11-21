function Level1() {
    game.world.setBounds(0, 0, 200000, 600);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 300;

    arrowkeys = game.input.keyboard.createCursorKeys();

    ObstaclesCollisionGroup = game.physics.p2.createCollisionGroup();

    m = new Merkel(300, 450);
    rampe = new Rampe(200, 200);
    game.camera.follow(m.chopper.bike);
}

Level1.prototype.update = function () {
    m.handleInput();
}