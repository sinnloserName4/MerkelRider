function MainMenu() {
    this.startButton = game.add.button(300, 250, "start_button", startGame, this);
}

function startGame() {
    this.startButton.destroy();
    currentState = new Level1();
}

MainMenu.prototype.update = function () {

}