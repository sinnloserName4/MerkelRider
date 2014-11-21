function Merkel(_x,_y) {
    this.sprite = game.add.sprite(_x, _y, "merkel");
    game.physics.enable(this.sprite, Phaser.Physics.P2JS);
}

Merkel.prototype.handleInput = function () {
    if (arrowkeys.left.isDown) {
        this.sprite.body.velocity.x = -100;
    }
    if (arrowkeys.right.isDown) {
        this.sprite.body.velocity.x = 100;
    }
    if (arrowkeys.up.isDown) {
        this.sprite.body.velocity.y = -100;
    }
}

