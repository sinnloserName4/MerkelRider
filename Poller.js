function Poller(_x, _y) {
    this.sprite = game.add.sprite(_x, _y-48, "bollard");

    game.physics.p2.enable(this.sprite);

    this.sprite.body.data.gravityScale = 0;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    this.sprite.body.static = true;
}


Poller.prototype.delete = function () {
    this.sprite.destroy();
}