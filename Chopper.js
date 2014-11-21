function Chopper(_x,_y) {
    this.leftWheel = game.add.sprite(_x-50, _y+120, "rad");
    this.rightWheel = game.add.sprite(_x + 50, _y + 120, "rad");
    this.bike = game.add.sprite(_x, _y-30, "chopper");

    game.physics.enable([this.leftWheel, this.rightWheel, this.bike], Phaser.Physics.P2JS);

    this.leftWheel.body.setCircle(25);
    this.leftWheel.body.debug = true;
    this.leftWheel.body.mass = 1;

    this.rightWheel.body.setCircle(25);
    this.rightWheel.body.debug = true;
    this.rightWheel.body.mass = 1;

    this.bike.body.setRectangle(130, 130);
    this.bike.body.debug = true;

    //ADD CONSTRAINTS
    //PrismaticConstraint(world, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
    this.constraint1 = game.physics.p2.createPrismaticConstraint(this.leftWheel, this.bike, false, [30, 0], [0, 0], [0, 1]);

    //SET LIMITS
    this.constraint1.lowerLimitEnabled = this.constraint1.upperLimitEnabled = true;
    this.constraint1.upperLimit = -1;
    this.constraint1.lowerLimit = -8;

    //PrismaticConstraint(world, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
    this.constraint2 = game.physics.p2.createPrismaticConstraint(this.rightWheel, this.bike, false, [-30, 0], [0, 0], [0, 1]);

    //SET LIMITS
    this.constraint2.lowerLimitEnabled = this.constraint2.upperLimitEnabled = true;
    this.constraint2.upperLimit = -1;
    this.constraint2.lowerLimit = -8;
}