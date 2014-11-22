function Poller(_x, _y) {
    this.sprite = game.add.sprite(_x, _y-50, "chopper");

    game.physics.p2.enable(this.sprite, true);

    this.sprite.body.clearShapes();
    this.sprite.body.setRectangle(10, 50);
    this.sprite.body.data.gravityScale = 0;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    this.sprite.body.static = true;
}


Poller.prototype.delete = function () {
    this.sprite.destroy();
}