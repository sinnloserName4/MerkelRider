function Car(_x, _y) {
    this.sprite = game.add.sprite(_x, _y - 65, "chopper");
    this.leftWheel = game.add.sprite(_x - 100, _y-15, "rad");
    this.rightWheel = game.add.sprite(_x + 100, _y-15, "rad");

    game.physics.p2.enable([this.sprite,this.leftWheel,this.rightWheel], true);

    this.sprite.body.clearShapes();
    this.sprite.body.setRectangle(200, 50);
    this.sprite.body.data.gravityScale = 0;
    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    this.sprite.body.static = true;

    this.leftWheel.body.clearShapes();
    this.leftWheel.body.setCircle(25);
    this.leftWheel.body.gravityScale = 0;
    this.leftWheel.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.leftWheel.body.collides(m.chopper.bikeCollisionGroup);
    this.leftWheel.body.static = true;

    this.rightWheel.body.clearShapes();
    this.rightWheel.body.setCircle(25);
    this.rightWheel.body.gravityScale = 0;
    this.rightWheel.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.rightWheel.body.collides(m.chopper.bikeCollisionGroup);
    this.rightWheel.body.static = true;
}

Car.prototype.delete = function () {
    this.sprite.destroy();
    this.leftWheel.destroy();
    this.rightWheel.destroy();
}