function Ground(_x, _y) {
    this.sprite = game.add.sprite(_x, _y, "ground");

    game.physics.p2.enable(this.sprite);

    this.sprite.body.clearShapes();
    this.sprite.body.setRectangle(game.world.width, 30);
    this.sprite.body.data.gravityScale = 0;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    this.sprite.body.static = true;


    if (DEBUG)
        this.sprite.body.debug = true;
}


Ground.prototype.delete = function () {
    this.sprite.destroy();
}