﻿function Credits() {
    var creditsText = "MERKEL RIDER \n \n \n \n (C) Gzae Bonacci Productions \n \n \n \n \n test";

    var style = { font: "55px Arial", fill: "#ffffff", align: "center" };

    this.textObject = game.add.text(0, 0, creditsText, style);

    this.tween = game.add.tween(this.textObject).to({ y: -600 }, 4000, Phaser.Easing.Linear.None).loop().start();
}

Credits.prototype.update = function () {

}