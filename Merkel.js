var FORWARD_SPEED = 15;
var BACKWARD_SPEED = -5;
var MAX_SPEED = 500;
var MIN_SPEED = -300;
var ROTATION_SPEED = 50;


function Merkel(_x, _y)
{
    this.chopper = new Chopper(_x,_y);
}

Merkel.prototype.handleInput = function ()
{
    if (arrowkeys.down.isDown) {
        this.Slow();
    }
    if (arrowkeys.up.isDown) {
        this.Accelerate();
    }
    if (arrowkeys.right.isDown) {
        this.RotateRight();
    }
    if (arrowkeys.left.isDown) {
        this.RotateLeft();
    }
}

Merkel.prototype.RotateRight = function ()
{
    this.chopper.bike.body.rotateRight(ROTATION_SPEED);
}

Merkel.prototype.RotateLeft = function ()
{
    this.chopper.bike.body.rotateLeft(ROTATION_SPEED);
}


Merkel.prototype.Slow = function ()
{
    this.chopper.rightWheel.body.velocity.x = Math.max(this.chopper.rightWheel.body.velocity.x + BACKWARD_SPEED, MIN_SPEED);
    this.chopper.leftWheel.body.velocity.x = Math.max(this.chopper.leftWheel.body.velocity.x + BACKWARD_SPEED, MIN_SPEED);
}

Merkel.prototype.Accelerate = function ()
{
    this.chopper.rightWheel.body.velocity.x = Math.min(this.chopper.rightWheel.body.velocity.x + FORWARD_SPEED, MAX_SPEED);
    this.chopper.leftWheel.body.velocity.x = Math.min(this.chopper.leftWheel.body.velocity.x + FORWARD_SPEED, MAX_SPEED);
}

Merkel.prototype.delete = function () {
    this.chopper.delete();
}