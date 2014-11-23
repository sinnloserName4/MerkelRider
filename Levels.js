function Level1() {
    this.level = 1;

    // BACKGROUND COLOR
    game.stage.backgroundColor = '#4AB1EB';
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 1000);
    // BACKGROUND SPRITE
    this.background = new Background(0, 1000, "city_back");
    // GROUND
    this.ground = new Ground(0, 1015);
    // DAILY JOACHIM
    this.joachim = game.add.sprite(0, 402, "hinweis1");
    // MAIN CHARACTER
    m = new Merkel(200, 800);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Rampe(400, 1000);
    Obstacles[1] = new Car(1200, 1000, "van");
    Obstacles[2] = new Car(1900, 1000, "van");
    Obstacles[3] = new Poller(2900, 1000, "van");
    Obstacles[4] = new Poller(3000, 1000, "van");
    Obstacles[5] = new Poller(3100, 1000, "van");

}

Level1.prototype.update = function () {
    m.handleInput();
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