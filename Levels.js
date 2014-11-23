function Level1() {
    this.level = 1;

    // BACKGROUND COLOR
    game.stage.backgroundColor = '#4AB1EB';
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 1500);
    // BACKGROUND SPRITE
    this.background = new Background(0, 1500, "city_back");
    // DAILY JOACHIM
    this.joachim = game.add.sprite(0, 903, "hinweis1");
    // MAIN CHARACTER
    m = new Merkel(200, 1300);
    // GROUND
    this.ground = new Ground(0, 1465);
    this.ground = new Ground(10100, 1465);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Rampe(2400, 1450);
    Obstacles[1] = new Car(4000, 1450, "van");
    Obstacles[2] = new Car(6200, 1450, "car1");
    Obstacles[3] = new Poller(7300, 1450);
    Obstacles[4] = new Poller(7370, 1440);
    Obstacles[4].sprite.scale.y = 1.15;
    Obstacles[5] = new Poller(7450, 1460);
    Obstacles[5].sprite.scale.y = 0.85;
    Obstacles[6] = new Poller(7520, 1450);
    Obstacles[7] = new Poller(7580, 1440);
    Obstacles[7].sprite.scale.y = 1.15;
    Obstacles[8] = new Poller(7650, 1460);
    Obstacles[8].sprite.scale.y = 0.85;
    
    Obstacles[9] = new Rampe(8700, 1450);
    Obstacles[10] = new Rampe(9010, 1245);
    Obstacles[11] = new Box(9027, 1450);
    Obstacles[11].sprite.scale.x = 1.01;
    Obstacles[12] = new Rampe(9320, 1040);
    Obstacles[13] = new Box(9337, 1450);
    Obstacles[13].sprite.scale.x = 1.01;
    Obstacles[14] = new Box(9337, 1245);
    Obstacles[14].sprite.scale.x = 1.01;

    Obstacles[15] = new Car(12000, 1450, "car2");
    Obstacles[16] = new Car(12500, 1450, "sportcar");
    Obstacles[17] = new Car(13000, 1450, "truck");

    Obstacles[18] = new Car(14600, 1450, "car1");
    Obstacles[19] = new Box(15000, 1450);
    Obstacles[20] = new Car(17000, 1450, "sportcar");
      

    Obstacles[21] = new Poller(16300, 1450);
    Obstacles[22] = new Poller(16370, 1440);
    Obstacles[22].sprite.scale.y = 1.15;
    Obstacles[23] = new Poller(16450, 1460);
    Obstacles[23].sprite.scale.y = 0.85;
    Obstacles[24] = new Poller(16520, 1450);
    Obstacles[25] = new Poller(16580, 1440);
    Obstacles[25].sprite.scale.y = 1.15;
    Obstacles[26] = new Poller(16650, 1460);
    Obstacles[26].sprite.scale.y = 0.85;

  
    

    this.win = new WinFlag(19000, 1450);

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
    
    // BACKGROUND COLOR
    game.stage.backgroundColor = '#39378E';
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 1500);
    // BACKGROUND SPRITE
    this.background = new Background(0, 1500, "city_back");
    // DAILY JOACHIM
    this.joachim = game.add.sprite(0, 903, "hinweis2");
    // MAIN CHARACTER
    m = new Merkel(200, 1300);
    // GROUND
    this.ground = new Ground(0, 1465);
    this.ground = new Ground(10100, 1465);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Car(1000, 1450, "van");
    Obstacles[1] = new Box(2310, 1450);
    Obstacles[1].sprite.scale.x = 1.01;
    Obstacles[2] = new Box(2617, 1450);
    Obstacles[2].sprite.scale.x = 1.01;
    Obstacles[3] = new Rampe(2600, 1245);
    Obstacles[4] = new Car(3600, 1450, "truck");
    Obstacles[5] = new Car(4600, 1450, "sportcar");

    Obstacles[6] = new Poller(6000, 1450);
    Obstacles[7] = new Rampe(7000, 1450);
    Obstacles[8] = new Box(9000, 1450);
    Obstacles[9] = new Box(9300, 1450);
    Obstacles[10] = new Car(9050, 1250, "van");

    Obstacles[11] = new Car(14000, 1450, "sportcar");
    Obstacles[12] = new Box(14450, 1450);

    Obstacles[13] = new Car(15000, 1450, "truck");
    Obstacles[14] = new Car(17500, 1450, "van");    

    this.win = new WinFlag(19000, 1450);
}

Level2.prototype.update = function () 
{
    m.handleInput();
    m.checkForFlip();
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
    this.win.delete();
    //this.joachim.destroy();
    this.background.delete();
    game.stage.backgroundColor = '#000000';
}

Level2.prototype.reset = function () {
    this.delete();
    currentState = new Level2();
}

function Level3() {
    this.level = 3;
    // BACKGROUND COLOR
    game.stage.backgroundColor = '#1D1C49';
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 1500);
    // BACKGROUND SPRITE
    this.background = new Background(0, 1500, "city_back");
    // DAILY JOACHIM
    this.joachim  = game.add.sprite(0, 903, "hinweis3");
    // MAIN CHARACTER
    m = new Merkel(200, 1300);
    // GROUND
    this.ground = new Ground(0, 1465);
    this.ground = new Ground(10100, 1465);
    // CAMERA
    game.camera.follow(m.chopper.bike);


    // OBSTACLES
    Obstacles[0] = new Car(1000, 1450, "car1");
    Obstacles[1] = new Car(1500, 1450, "car2");
    Obstacles[2] = new Car(2100, 1450, "car1");
    Obstacles[3] = new Car(2500, 1450, "sportcar");
    Obstacles[4] = new Rampe(4000, 1450);
    Obstacles[5] = new Poller(7000, 1440);
    Obstacles[6] = new Poller(7060, 1460);
    Obstacles[7] = new Poller(7120, 1450);
    Obstacles[8] = new Poller(7500, 1460);
    Obstacles[9] = new Poller(7580, 1450);
    Obstacles[10] = new Poller(7650, 1440);
    Obstacles[11] = new Rampe(8500, 1450);
    Obstacles[12] = new Car(9500, 1450,"car1");
    Obstacles[13] = new Car(10000, 1450,"car1");
    Obstacles[14] = new Car(9750, 1350, "sportcar");
    Obstacles[15] = new Car(10400, 1450, "car2");
    Obstacles[16] = new Car(10200, 1350, "sportcar");
    Obstacles[17] = new Car(10000, 1270, "sportcar");
    Obstacles[18] = new Car(12000, 1450, "truck");
    Obstacles[19] = new Car(13000, 1450, "van");
    Obstacles[20] = new Rampe(16000, 1450);
    Obstacles[21] = new Box(16300, 1450);
   
    this.win = new WinFlag(18000, 1450);

    this.joachimclapping = game.add.sprite(18000, 1100, "clapping");
    this.joachimclapping.animations.add("klatschen");
    this.joachimclapping.animations.play("klatschen");
}

Level3.prototype.update = function () {
    m.handleInput();
    snow.update();
}

Level3.prototype.delete = function () {
    m.delete();
    console.log("le");
    for (var i = 0; i < Obstacles.length; i++) {
        if (Obstacles[i] === undefined) {
            break;
        }
        Obstacles[i].delete();
    }
    this.win.delete();
    //this.joachim.destroy();
    this.background.delete();
    game.stage.backgroundColor = '#000000';
}

Level3.prototype.reset = function () {
    this.delete();
    currentState = new Level3();
}

