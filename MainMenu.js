function MainMenu() {
    this.level = "MainMenu";
    this.startButton = game.add.button(300, 250, "start_button", this.startGame, this);
    this.credits = game.add.button(300, 400, "credits", this.showCredits, this);
    schleier.alpha = 1;
    this.schleierBeGone = game.add.tween(schleier).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
}

MainMenu.prototype.update = function () {
    pausebutton.pausebutton.alpha = 0;
}

MainMenu.prototype.delete = function () {
    this.startButton.destroy();
    this.credits.destroy();
    schleier.alpha = 1;
    this.schleierBeGone = game.add.tween(schleier).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
    pausebutton.pausebutton.alpha = 1;
}

MainMenu.prototype.reset = function () {

}

MainMenu.prototype.startGame = function() {
    this.delete();
    currentState = new Level1();
    snow = new Snow();
}

MainMenu.prototype.showCredits = function () {
    this.delete();
    currentState = new Credits();
}
