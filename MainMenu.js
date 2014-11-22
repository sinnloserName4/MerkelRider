function MainMenu() {
    this.level = 0;
    this.startButton = game.add.button(300, 250, "start_button", startGame, this);
    this.credits = game.add.button(300, 400, "credits", showCredits, this);
}

MainMenu.prototype.update = function () {

}

MainMenu.prototype.delete = function () {

}

MainMenu.prototype.reset = function () {

}

function startGame() {
    this.startButton.destroy();
    this.credits.destroy();
    pausebutton.pausebutton.alpha = 1;
    currentState = new Level2();
    snow = new Snow();
}

function showCredits() {
    this.startButton.destroy();
    this.credits.destroy();
    currentState = new Credits();
}
