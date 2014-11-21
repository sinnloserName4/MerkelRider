function MainMenu() {
    this.startButton = game.add.button(300, 250, "start_button", startGame, this);
}

MainMenu.prototype.update = function () {

}

function startGame() {
    this.startButton.destroy();
    currentState = new Level1();
}
