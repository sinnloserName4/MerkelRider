var SPEED = 100;


function Merkel(_x, _y)
{
    this.health = 100;
    this.sprite = game.add.sprite(_x, _y, "merkel");
    game.physics.enable(this.sprite, Phaser.Physics.P2JS);
    this.chopper = new Chopper(_x,_y);
}

Merkel.prototype.handleInput = function ()
{
    if (arrowkeys.left.isDown) {
        this.slow();
    }
    if (arrowkeys.right.isDown) {
        this.Accelerate();
    }
    if (arrowkeys.up.isDown) {
        this.sprite.body.velocity.y = -SPEED;
    }
}
Merkel.prototype.Slow = function ()
{
    this.sprite.body.velocity.x -= SPEED;
}

Merkel.prototype.Accelerate = function ()
{
    this.sprite.body.velocity.x += SPEED;
}
