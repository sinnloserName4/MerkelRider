function Level1() {
    this.level = 1;

    // BACKGROUND COLOR
    game.stage.backgroundColor = '#4AB1EB';
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 1000);
    // BACKGROUND SPRITE
    this.background = new Background(0, 1000, "city_back");
    // DAILY JOACHIM
    this.joachim = game.add.sprite(0, 403, "hinweis1");
    // MAIN CHARACTER
    m = new Merkel(200, 800);
    // GROUND
    this.ground = new Ground(0, 965);
    this.ground = new Ground(10100, 965);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Rampe(400, 950);
    Obstacles[1] = new Car(1200, 950, "van");
    Obstacles[2] = new Car(1900, 950, "van");
    Obstacles[3] = new Poller(2900, 950);
    Obstacles[4] = new Poller(2970, 940);
    Obstacles[4].sprite.scale.y = 1.15;
    Obstacles[5] = new Poller(3050, 960);
    Obstacles[5].sprite.scale.y = 0.85;
    Obstacles[6] = new Poller(3120, 950);
    Obstacles[7] = new Poller(3180, 940);
    Obstacles[7].sprite.scale.y = 1.15;
    Obstacles[8] = new Poller(3250, 960);
    Obstacles[8].sprite.scale.y = 0.85;
    
    Obstacles[9] = new Rampe(4500, 950);
    Obstacles[10] = new Rampe(4810, 745);
    Obstacles[11] = new Box(4827, 950);
    Obstacles[11].sprite.scale.x = 1.01;
    Obstacles[12] = new Rampe(5120, 540);
    Obstacles[13] = new Box(5137, 950);
    Obstacles[13].sprite.scale.x = 1.01;
    Obstacles[14] = new Box(5137, 745);
    Obstacles[14].sprite.scale.x = 1.01;
    

    this.win = new WinFlag(19000, 950);

}

Level1.prototype.update = function () {
    m.handleInput();
    m.checkForFlip();
    snow.update();
}

Level1.prototype.delete = function () {
    m.delete();
    for (var i = 0; i < Obstacles.length; i++) {
        if (Obstacles[i] === undefined) {
            break;
        }
        Obstacles[i].delete();
    }
    this.win.delete();
    this.joachim.destroy();
    this.background.delete();
    game.stage.backgroundColor = '#000000';
}

Level1.prototype.reset = function () {
    this.delete();
    currentState = new Level1();
}



function Level2()
{
    this.level = 2;
    
    game.stage.backgroundColor = '#4AB1EB';
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 950);
    this.background = new Background(0, 950, "city_back");
    this.joachim = game.add.sprite(0, 400, "hinweis1");

    // MAIN CHARACTER
    m = new Merkel(200, 800);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Car(500, 950, "van");
    Obstacles[1] = new WinFlag(2000, 950);
}

Level2.prototype.update = function () 
{
    m.handleInput();
    snow.update();
}

Level2.prototype.delete = function () {
    m.delete();
    for (var i = 0; i < Obstacles.length; i++) {
        if (Obstacles[i] === undefined) {
            break;
        }
        Obstacles[i].delete();
    }
    this.joachim.destroy();
    this.background.delete();
    game.stage.backgroundColor = '#000000';
}

Level2.prototype.reset = function () {
    this.delete();
    currentState = new Level2();
}

function Level3() {
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 600);

    // MAIN CHARACTER
    m = new Merkel(200, 600);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Rampe(500, 600);
    Obstacles[1] = new Car(1500, 600);
    Obstacles[2] = new Car(1850, 600);
    Obstacles[3] = new Car(2200, 600);
    Obstacles[4] = new Poller(2500, 600);
    Obstacles[5] = new Poller(2590, 600);
    Obstacles[6] = new Poller(2680, 600);
    Obstacles[7] = new Ground(0, 615);

    win = new WinFlag(4000, 550);
}

Level3.prototype.update = function () {
    m.handleInput();
    snow.update();
}

Level3.prototype.delete = function () {
    m.delete();
    for (var i = 0; i < Obstacles.length; i++) {
        if (Obstacles[i] === undefined) {
            break;
        }
        Obstacles[i].delete();
    }
}

Level3.prototype.reset = function () {
    this.delete();
}

Level3.prototype.next = function () {
    this.delete();
}