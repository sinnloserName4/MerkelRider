﻿function Level1() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.gravity.y = 300;
    arrowkeys = game.input.keyboard.createCursorKeys();
    m = new Merkel(300, 450);
}

Level1.prototype.update = function () {
    m.handleInput();
}