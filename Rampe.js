function Rampe(_x,_y)
{
    this.sprite = game.add.sprite(_x, _y, "chopper");
    
    game.physics.p2.enable(this.sprite, true);
    this.sprite.body.clearShapes();
    this.sprite.body.addPolygon({}, _x, _y + 200, _x + 300, _y + 200, _x + 300, _y);
    this.sprite.body.static = true;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    
}