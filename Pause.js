function Pause() {
    this.pauseMenu;
    this.continueButton;
    this.restartButton;
    this.selectLevelButton;
    this.exitButton;
    this.x = 0;
    this.y = 0;
    //^initialisierung von variablen.. kann evtl weg

    this.pausebutton = game.add.button(700, 10, "pausebutton", this.pause, this);
    this.pausebutton.fixedToCamera = true;
}

Pause.prototype.pause = function () {
    this.x = game.camera.position.x-game.width/2;
    this.y = game.camera.position.y-game.height/2;
    this.pauseMenu = game.add.sprite(this.x, this.y, "pausemenu");

    this.x += 210;
    this.y += 150;

    this.continueButton = game.add.sprite(this.x + 100, this.y + 85, "continue");
    this.restartButton = game.add.sprite(this.x + 125, this.y + 140, "restart");
    this.selectLevelButton = game.add.sprite(this.x + 100, this.y + 200, "selectlevel");
    this.exitButton = game.add.sprite(this.x + 130, this.y + 250, "exit");

    game.paused = true;
}


Pause.prototype.delete = function () {
    this.pauseMenu.destroy();
    this.continueButton.destroy();
    this.restartButton.destroy();
    this.selectLevelButton.destroy();
    this.exitButton.destroy();
    game.paused = false;
}

Pause.prototype.contains = function(x, y, sprite) {
    var x1 = sprite.x - (game.camera.position.x - game.width / 2);
    var y1 = sprite.y - (game.camera.position.y - game.height / 2);
    var x2 = sprite.x - (game.camera.position.x - game.width / 2) + sprite.width;
    var y2 = sprite.y - (game.camera.position.y - game.height / 2) + sprite.height;

    return ((x > x1) && (x < x2) && (y > y1) && (y < y2));
}

function unpause(event) {
    if (game.paused) {
        if (pausebutton.contains(event.x, event.y, pausebutton.continueButton)) {
            pausebutton.continue();
        }
        if (pausebutton.contains(event.x, event.y, pausebutton.restartButton)) {
            pausebutton.restart();
        }
        if (pausebutton.contains(event.x, event.y, pausebutton.selectLevelButton)) {
            pausebutton.selectLevel();
        }
        if (pausebutton.contains(event.x, event.y, pausebutton.exitButton)) {
            pausebutton.exit();
        }
    }
}

Pause.prototype.continue = function () {
    this.delete();
}

Pause.prototype.restart = function () {
    this.delete();
    currentState.reset();
}

Pause.prototype.selectLevel = function () {
    this.delete();
}

Pause.prototype.exit = function () {
    this.delete();
    currentState.delete();
    game.camera.reset();
    pausebutton.pausebutton.alpha = 0;
    if (currentState.level != 0) {
        currentState = new MainMenu();
    }
}