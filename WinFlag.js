function WinFlag(_x,_y) {
    this.sprite = game.add.sprite(_x, _y-150, "baum");

    game.physics.p2.enable(this.sprite);

    this.sprite.body.setCollisionGroup(winFlagCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    this.sprite.body.static = true;

    if (DEBUG)
        this.sprite.body.debug = true;
}

WinFlag.prototype.delete = function () {
    this.sprite.destroy();
}