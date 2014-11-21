function Chopper(_x,_y) {
    this.leftWheel = game.add.sprite(_x-50, _y+100, "rad");
    this.rightWheel = game.add.sprite(_x + 50, _y + 100, "rad");
    this.bike = game.add.sprite(_x, _y, "chopper");

    game.physics.enable([this.leftWheel, this.rightWheel, this.bike], Phaser.Physics.P2JS);

    this.leftWheel.body.setCircle(25);
    this.leftWheel.body.debug = true;

    this.rightWheel.body.setCircle(25);
    this.rightWheel.body.debug = true;

    this.bike.body.setRectangle(130, 130);
    this.bike.body.debug = true;

    //ADD CONSTRAINTS
    //PrismaticConstraint(world, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
    var constraint = game.physics.p2.createPrismaticConstraint(this.leftWheel, this.rightWheel, false, [30, 0], [0, 0], [0, 1]);

    //SET LIMITS
    constraint.lowerLimitEnabled = constraint.upperLimitEnabled = true;
    constraint.upperLimit = -1;
    constraint.lowerLimit = -8;
}