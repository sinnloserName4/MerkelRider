var FORWARD_SPEED = 20;
var BACKWARD_SPEED = -5;
var MAX_SPEED = 1000;
var MIN_SPEED = -300;
var ROTATION_SPEED = 50;


function Merkel(_x, _y)
{
    this.chopper = new Chopper(_x, _y);

    this.backFlip = new Array(3);
    this.frontFlip = new Array(3);

    this.backFlip[0] = false;
    this.backFlip[1] = false;
    this.backFlip[2] = false;
    this.frontFlip[0] = false;
    this.frontFlip[1] = false;
    this.frontFlip[2] = false;

    this.backflip_splash = game.add.sprite(200, 200,"backflip");
    this.backflip_splash.fixedToCamera = true;
    this.backflip_splash.alpha = 0;
    this.backflip_tween;

    this.frontflip_splash = game.add.sprite(200, 200, "frontflip");
    this.frontflip_splash.fixedToCamera = true;
    this.frontflip_splash.alpha = 0;
    this.frontflip_tween;
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

Merkel.prototype.checkForFlip = function () {
    var delta = 1;

        if (!this.frontFlip[0] && !this.frontFlip[1] && !this.frontFlip[2]) {
            if ((this.chopper.rightWheel.x - this.chopper.leftWheel.x) < delta) {
                if (this.chopper.rightWheel.x > this.chopper.merkel.x) {
                    this.frontFlip[0] = true;
                }
            }
        }
        if (this.frontFlip[0] && !this.frontFlip[1] && !this.frontFlip[2]) {
            if ((this.chopper.rightWheel.y - this.chopper.leftWheel.y) < delta) {
                if (this.chopper.rightWheel.y > this.chopper.merkel.y) {
                    this.frontFlip[0] = false;
                }
                if (this.chopper.rightWheel.y < this.chopper.merkel.y) {
                    this.frontFlip[1] = true;
                }
            }
        }
        if (this.frontFlip[0] && this.frontFlip[1] && !this.frontFlip[2]) {
            if ((this.chopper.rightWheel.x - this.chopper.leftWheel.x) < delta) {
                if (this.chopper.rightWheel.x > this.chopper.merkel.x) {
                    this.frontFlip[1] = false;
                }
                if (this.chopper.rightWheel.x < this.chopper.merkel.x) {
                    this.frontFlip[2] = true;
                }
            }
        }
        if (this.frontFlip[0] && this.frontFlip[1] && this.frontFlip[2]) {
            this.frontFlip[0] = this.frontFlip[1] = this.frontFlip[2] = false;
            this.backFlip[0] = this.backFlip[1] = this.backFlip[2] = false;
            if (this.frontflip_tween === undefined) {
                this.frontflip();
            }
            if ((this.frontflip_tween != undefined)) {
                if (this.backflip_tween === undefined) {
                    if (!this.frontflip_tween.isRunning) {
                        this.frontflip();
                    }
                }
                else {
                    if ((!this.frontflip_tween.isRunning) && (!this.backflip_tween.isRunning)) {
                        this.frontflip();
                    }
                }
            }
        }



        if (!this.backFlip[0] && !this.backFlip[1] && !this.backFlip[2]) {
            if ((this.chopper.rightWheel.x - this.chopper.leftWheel.x) < delta) {
                if (this.chopper.rightWheel.x < this.chopper.merkel.x) {
                    this.backFlip[0] = true;
                }
            }
        }
        if (this.backFlip[0] && !this.backFlip[1] && !this.backFlip[2]) {
            if ((this.chopper.rightWheel.y - this.chopper.leftWheel.y) < delta) {
                if (this.chopper.rightWheel.y > this.chopper.merkel.y) {
                    this.backFlip[0] = false;
                }
                if (this.chopper.rightWheel.y < this.chopper.merkel.y) {
                    this.backFlip[1] = true;
                }
            }
        }
        if (this.backFlip[0] && this.backFlip[1] && !this.backFlip[2]) {
            if ((this.chopper.rightWheel.x - this.chopper.leftWheel.x) < delta) {
                if (this.chopper.rightWheel.x < this.chopper.merkel.x) {
                    this.backFlip[1] = false;
                }
                if (this.chopper.rightWheel.x > this.chopper.merkel.x) {
                    this.backFlip[2] = true;
                }
            }
        }
        if (this.backFlip[0] && this.backFlip[1] && this.backFlip[2]) {
            this.frontFlip[0] = this.frontFlip[1] = this.frontFlip[2] = false;
            this.backFlip[0] = this.backFlip[1] = this.backFlip[2] = false;
            if (this.backflip_tween === undefined) {
                this.backflip();
            }
            if ((this.backflip_tween != undefined)) {
                if (this.frontflip_tween === undefined) {
                    if (!this.backflip_tween.isRunning) {
                        this.backflip();
                    }
                }
                else {
                    if ((!this.backflip_tween.isRunning) && (!this.frontflip_tween.isRunning)) {
                        this.backflip();
                    }
                }
            }
        }
}

Merkel.prototype.frontflip = function () {
    this.backflip_tween = game.add.tween(this.backflip_splash).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);
}

Merkel.prototype.backflip = function () {
    this.frontflip_tween = game.add.tween(this.frontflip_splash).to({ alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, true);
}