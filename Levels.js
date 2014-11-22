function Level2() 
{
    // WORLD BOUNDS
    game.world.setBounds(0, 0, 20000, 600);
    // MAIN CHARACTER
    m = new Merkel(200, 600);
    // CAMERA
    game.camera.follow(m.chopper.bike);
    // OBSTACLES
    Obstacles[0] = new Rampe(200, 700);
    Obstacles[1] = new Car(1500, 600);
    Obstacles[2] = new Car(1850, 600);
    Obstacles[3] = new Car(2200, 600);
    Obstacles[4] = new Poller(2500, 600);
    Obstacles[5] = new Poller(2590, 600);
    Obstacles[6] = new Poller(2680, 600);

}

Level2.prototype.update = function () 
{
    m.handleInput();
}





function Level1() {
    game.world.setBounds(0, 0, 200000, 600);
    m = new Merkel(300, 450);
    rampe = new Rampe(200, 200);
    car = new Car(500, 550);

    game.camera.follow(m.chopper.bike);
}

Level1.prototype.update = function () {
    m.handleInput();
}