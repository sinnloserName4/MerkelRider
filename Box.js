function Box(_x, _y)
{
    this.sprite = game.add.sprite(_x+154, _y - 102, "box");
    game.physics.p2.enable(this.sprite);
    this.sprite.body.static = true;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);

    if (DEBUG) this.sprite.body.debug = true;
}

Box.prototype.delete = function()
{
    this.sprite.destroy();
}