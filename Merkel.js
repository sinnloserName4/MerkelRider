var SPEED = 30;


function Merkel(_x, _y)
{
    this.health = 100;
    //this.sprite = game.add.sprite(_x, _y, "merkel");
    //game.physics.enable(this.sprite, Phaser.Physics.P2JS);
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
    this.chopper.rightWheel.body.velocity.x -= SPEED;
}

Merkel.prototype.Accelerate = function ()
{
    this.chopper.rightWheel.body.velocity.x += SPEED;
}
