function MainMenu() {
    this.startButton = game.add.button(300, 250, "start_button", startGame, this);
    this.credits = game.add.button(300, 400, "credits", showCredits, this);
}

MainMenu.prototype.update = function () {

}

function startGame() {
    this.startButton.destroy();
    this.credits.destroy();
    currentState = new Level2();
    snow = new Snow();
}

function showCredits() {
    this.startButton.destroy();
    this.credits.destroy();
    currentState = new Credits();
}
