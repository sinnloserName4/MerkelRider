function GameOver(_current) {
    this.current = _current
    this.level = 0;
    currentState.delete();
    game.camera.reset();

    this.x = game.camera.position.x - game.width / 2;
    this.y = game.camera.position.y - game.height / 2;
    this.pauseMenu = game.add.sprite(this.x, this.y, "verloren");

    this.x += 210;
    this.y += 150;

    this.continueButton = game.add.sprite(this.x + 100, this.y + 85, "continue_disabled");
    this.restartButton = game.add.button(this.x + 125, this.y + 140, "restart", this.restart, this);
    this.selectLevelButton = game.add.button(this.x + 100, this.y + 200, "selectlevel", this.selectLevel, this);
    this.exitButton = game.add.button(this.x + 130, this.y + 250, "exit", this.exit, this);

    this.restartHover = game.add.sprite(this.x + 125, this.y + 140, "restart_hover");
    this.selectLevelHover = game.add.sprite(this.x + 100, this.y + 200, "selectlevel_hover");
    this.exitHover = game.add.sprite(this.x + 130, this.y + 250, "exit_hover");

    this.restartHover.alpha = 0;
    this.selectLevelHover.alpha = 0;
    this.exitHover.alpha = 0;

    this.restartButton.onInputOver.add(this.restart_hover, this);
    this.selectLevelButton.onInputOver.add(this.selectLevel_hover, this);
    this.exitButton.onInputOver.add(this.exit_hover, this);

    this.restartButton.onInputOut.add(this.restart_out, this);
    this.selectLevelButton.onInputOut.add(this.selectLevel_out, this);
    this.exitButton.onInputOut.add(this.exit_out, this);
}

GameOver.prototype.restart_hover = function () {
    this.restartButton.alpha = 0;
    this.restartHover.alpha = 1;
}
GameOver.prototype.selectLevel_hover = function () {
    this.selectLevelButton.alpha = 0;
    this.selectLevelHover.alpha = 1;
}
GameOver.prototype.exit_hover = function () {
    this.exitButton.alpha = 0;
    this.exitHover.alpha = 1;
}

GameOver.prototype.restart_out = function () {
    this.restartButton.alpha = 1;
    this.restartHover.alpha = 0;
}
GameOver.prototype.selectLevel_out = function () {
    this.selectLevelButton.alpha = 1;
    this.selectLevelHover.alpha = 0;
}
GameOver.prototype.exit_out = function () {
    this.exitButton.alpha = 1;
    this.exitHover.alpha = 0;
}


GameOver.prototype.update = function () {

}

GameOver.prototype.delete = function () {
    this.pauseMenu.destroy();
    this.continueButton.destroy();
    this.restartButton.destroy();
    this.selectLevelButton.destroy();
    this.exitButton.destroy();
    this.restartHover.destroy();
    this.selectLevelHover.destroy();
    this.exitHover.destroy();
}

GameOver.prototype.restart = function () {

    this.delete();
    switch (this.current) {
        case 1:
            currentState = new Level1();
            break;
        case 2:
            currentState = new Level2();
            break;
        case 3:
            currentState = new Level3();
            break;
        case 4:
            currentState = new Level4();
            break;
        default:
            break;
    }
}
GameOver.prototype.selectLevel = function () {
    this.delete();
    ///SELECT LEVEL PLS
}
GameOver.prototype.exit = function () {
    this.delete();
    currentState = new MainMenu();
    
}