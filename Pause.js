function Pause() {
    this.pauseMenu;

    this.continueButton;
    this.continueHover;

    this.restartButton;
    this.restartHover;

    this.selectLevelButton;
    this.selectLevelHover;

    this.exitButton;
    this.exitHover;

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

    this.continueHover = game.add.sprite(this.x + 100, this.y + 85, "continue_hover");
    this.restartHover = game.add.sprite(this.x + 125, this.y + 140, "restart_hover");
    this.selectLevelHover = game.add.sprite(this.x + 100, this.y + 200, "selectlevel_hover");
    this.exitHover = game.add.sprite(this.x + 130, this.y + 250, "exit_hover");

    this.continueHover.alpha = 0;
    this.restartHover.alpha = 0;
    this.selectLevelHover.alpha = 0;
    this.exitHover.alpha = 0;

    game.paused = true;
}


Pause.prototype.delete = function () {
    this.pauseMenu.destroy();
    this.continueButton.destroy();
    this.restartButton.destroy();
    this.selectLevelButton.destroy();
    this.exitButton.destroy();
    this.continueHover.destroy();
    this.restartHover.destroy();
    this.selectLevelHover.destroy();
    this.exitHover.destroy();
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

function pauseUpdate() {
    if (pausebutton.contains(game.input.x, game.input.y, pausebutton.continueButton)) {
        pausebutton.continueButton.alpha = 0;
        pausebutton.continueHover.alpha = 1;
    }
    else {
        pausebutton.continueButton.alpha = 1;
        pausebutton.continueHover.alpha = 0;
    }

    if (pausebutton.contains(game.input.x, game.input.y, pausebutton.restartButton)) {
        pausebutton.restartButton.alpha = 0;
        pausebutton.restartHover.alpha = 1;
    }
    else {
        pausebutton.restartButton.alpha = 1;
        pausebutton.restartHover.alpha = 0;
    }

    if (pausebutton.contains(game.input.x, game.input.y, pausebutton.selectLevelButton)) {
        pausebutton.selectLevelButton.alpha = 0;
        pausebutton.selectLevelHover.alpha = 1;
    }
    else {
        pausebutton.selectLevelButton.alpha = 1;
        pausebutton.selectLevelHover.alpha = 0;
    }

    if (pausebutton.contains(game.input.x, game.input.y, pausebutton.exitButton)) {
        pausebutton.exitButton.alpha = 0;
        pausebutton.exitHover.alpha = 1;
    }
    else {
        pausebutton.exitButton.alpha = 1;
        pausebutton.exitHover.alpha = 0;
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