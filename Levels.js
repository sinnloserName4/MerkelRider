function Level1() {
    this.level = 1;
}

Level1.prototype.update = function () {
    
}


function Level2()
{
    this.level = 2;
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 800);

    // MAIN CHARACTER
    m = new Merkel(200, 600);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Rampe(500, 800);
    Obstacles[1] = new Car(1500, 800);
    Obstacles[2] = new Car(1850, 800);
    Obstacles[3] = new Car(2200, 800);
    Obstacles[4] = new Poller(2500, 800);
    Obstacles[5] = new Poller(2590, 800);
    Obstacles[6] = new Poller(2680, 800);
    Obstacles[7] = new Ground(0, 815);
    Obstacles[8] = new WinFlag(4000, 550);
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
}

Level2.prototype.reset = function () {
    this.delete();
    Level2();
}

Level2.prototype.next = function () {
    this.delete();
    currentState = new Level3();
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