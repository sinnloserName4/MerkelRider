function Chopper(_x,_y) {
    this.leftWheel = game.add.sprite(_x-50, _y+100, "rad");
    this.rightWheel = game.add.sprite(_x + 50, _y + 100, "rad");
    this.bike = game.add.sprite(_x, _y-30, "chopper");

    game.physics.enable([this.leftWheel, this.rightWheel, this.bike], Phaser.Physics.P2JS);

    //the collision group of the chopper to prevent it from colliding with itself
    this.bikeCollisionGroup = game.physics.p2.createCollisionGroup(); //COLLISION GROUP
    game.physics.p2.updateBoundsCollisionGroup();

    this.leftWheel.body.setCircle(25);
    this.leftWheel.body.debug = true;
    this.leftWheel.body.mass = 1;
    this.leftWheel.body.setCollisionGroup(this.bikeCollisionGroup);

    this.rightWheel.body.setCircle(25);
    this.rightWheel.body.debug = true;
    this.rightWheel.body.mass = 1;
    this.rightWheel.body.setCollisionGroup(this.bikeCollisionGroup);

    this.bike.body.setRectangle(50, 50);
    this.bike.body.debug = true;
    this.bike.body.mass = 1;
    this.bike.body.setCollisionGroup(this.bikeCollisionGroup);

    //Spring(world, bodyA, bodyB, restLength, stiffness, damping, worldA, worldB, localA, localB)
    this.spring1 = game.physics.p2.createSpring(this.bike, this.rightWheel, 70, 150, 50, null, null, [30, 0], null);
    this.spring2 = game.physics.p2.createSpring(this.bike, this.leftWheel, 70, 150, 50, null, null, [-30, 0], null);

    //ADD CONSTRAINTS
    //PrismaticConstraint(world, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
    this.constraint1 = game.physics.p2.createPrismaticConstraint(this.bike, this.leftWheel, false, [-30, 0], [0, 0], [0, 1]);

    //SET LIMITS
    this.constraint1.lowerLimitEnabled = this.constraint1.upperLimitEnabled = true;
    this.constraint1.upperLimit = -1;
    this.constraint1.lowerLimit = -8;

    //PrismaticConstraint(world, bodyA, bodyB, lockRotation, anchorA, anchorB, axis, maxForce)
    this.constraint2 = game.physics.p2.createPrismaticConstraint(this.bike, this.rightWheel, false, [30, 0], [0, 0], [0, 1]);

    //SET LIMITS
    this.constraint2.lowerLimitEnabled = this.constraint2.upperLimitEnabled = true;
    this.constraint2.upperLimit = -1;
    this.constraint2.lowerLimit = -8;
}