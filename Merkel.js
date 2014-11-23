var FORWARD_SPEED = 20;
var BACKWARD_SPEED = -5;
var MAX_SPEED = 800;
var MIN_SPEED = -300;
var ROTATION_SPEED = 50;


function Merkel(_x, _y)
{
    this.chopper = new Chopper(_x, _y);
    this.UpsideDown = false;
    this.onGround = false;
    this.counter = 0;
    this.groundcounter1 = 0;
    this.groundcounter2 = 0;
}

Merkel.prototype.handleInput = function ()
{
    if (arrowkeys.down.isDown) {
        if (this.onGround)
        this.Slow();
    }
    if (arrowkeys.up.isDown) {
        if(this.onGround)
        this.Accelerate();
    }
    if (arrowkeys.right.isDown) {
        this.RotateRight();
    }
    if (arrowkeys.left.isDown) {
        this.RotateLeft();
    }
    this.isOnGround();
}

Merkel.prototype.RotateRight = function ()
{
    if (this.onGround)
        this.chopper.bike.body.rotateRight(ROTATION_SPEED / 2);
    else
        this.chopper.bike.body.rotateRight(ROTATION_SPEED);
}

Merkel.prototype.RotateLeft = function ()
{
    if (this.onGround)
        this.chopper.bike.body.rotateLeft(ROTATION_SPEED / 2);
    else
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

Merkel.prototype.checkForFlip = function () {
    var delta = 10;
    if ((this.chopper.rightWheel.y - this.chopper.leftWheel.y) < delta) {
        if ((this.chopper.rightWheel.y < this.chopper.bike.y)) {
            this.UpsideDown = true;
        }
        else if (this.UpsideDown) {
            this.UpsideDown = false;
            return true;
        }
    }
    return false;
}

Merkel.prototype.isOnGround = function()
{
    if (Math.abs(m.groundcounter1 - this.counter) < 30) this.onGround = true;
    else {
        if (Math.abs(m.groundcounter2 - this.counter) < 30) this.onGround = true;
        else { this.onGround = false; }
    }
    this.counter++;
}

function SetOnGround1()
{
    m.groundcounter1 = m.counter;
    
}
function SetOnGround2() {
    m.groundcounter2 = m.counter;

}