function Rampe(_x,_y)
{
    this.x = _x;
    this.y = _y - 200;
    this.sprite = game.add.sprite(this.x, this.y, "rad");
    
    game.physics.p2.enable(this.sprite, true);
    this.sprite.body.clearShapes();
    this.sprite.body.addPolygon({}, [[0, 200], [300, 0], [300,200]]);


    this.sprite.body.static = true;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
}

Rampe.prototype.delete = function () {
    this.sprite.destroy();
}