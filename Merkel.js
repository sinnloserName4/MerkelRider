var forwardSPEED = 15;
var backwardSPEED = -5;
var maxSPEED = 500;
var minSPEED = -300;


function Merkel(_x, _y)
{
    this.health = 100;
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

}

Merkel.prototype.RotateLeft = function ()
{

}


Merkel.prototype.Slow = function ()
{
    this.chopper.rightWheel.body.velocity.x = Math.max(this.chopper.rightWheel.body.velocity.x + backwardSPEED, minSPEED);
    this.chopper.leftWheel.body.velocity.x = Math.max(this.chopper.leftWheel.body.velocity.x + backwardSPEED, minSPEED);
}

Merkel.prototype.Accelerate = function ()
{
    this.chopper.rightWheel.body.velocity.x = Math.min(this.chopper.rightWheel.body.velocity.x + forwardSPEED, maxSPEED);
    this.chopper.leftWheel.body.velocity.x = Math.min(this.chopper.leftWheel.body.velocity.x + forwardSPEED, maxSPEED);
}
