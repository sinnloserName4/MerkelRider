function Rampe(_x, _y)
{
    
    this.sprite = game.add.sprite(_x, _y-215, "rampe");


    game.physics.p2.enable(this.sprite, true);
    this.sprite.body.clearShapes();
    this.sprite.body.addPolygon({}, [[0, 205], [305, 0], [305, 205]]);
    this.sprite.anchor.x = 0.67;
    this.sprite.anchor.y = 0.81;

    this.sprite.body.static = true;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
}

Rampe.prototype.delete = function () {
    this.sprite.destroy();
}