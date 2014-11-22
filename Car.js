function Car(_x,_y,type)
{
   
    

    switch(type)
    {
        case "car1":
                this.sprite = game.add.sprite(_x, _y - 125, "car1");
                game.physics.p2.enable(this.sprite);
                this.sprite.body.data.gravityScale = 0;
                this.sprite.body.clearShapes();
                this.sprite.body.addPolygon({}, [[0, 105], [360, 105], [360, 34], [321, 34], [287, 0], [155, 0], [110, 40], [17, 46], [0, 83]]);
                this.sprite.anchor.x = 0.53;
                this.sprite.anchor.y = 0.58;
            break;

        case "car2":
                this.sprite = game.add.sprite(_x, _y - 125, "car2");
                game.physics.p2.enable(this.sprite);
                this.sprite.body.data.gravityScale = 0;
                this.sprite.body.clearShapes();
                this.sprite.body.addPolygon({}, [[0, 105], [418, 105], [394, 28], [324, 28], [295, 0], [185, 0], [129, 28], [24, 43], [0, 75]]);
                this.sprite.anchor.x = 0.53;
                this.sprite.anchor.y = 0.5;
            break;

        case "sportcar":
                this.sprite = game.add.sprite(_x, _y - 95, "sportcar");
                game.physics.p2.enable(this.sprite);
                this.sprite.body.data.gravityScale = 0;
                this.sprite.body.clearShapes();
                this.sprite.body.addPolygon({}, [[0, 83], [383, 83], [412, 61], [410, 27], [338, 15], [200, 21], [220, 0], [193, 0], [0, 52]]);
                this.sprite.anchor.x = 0.52;
                this.sprite.anchor.y = 0.5;
            break;

        case "truck":
                this.sprite = game.add.sprite(_x, _y - 201, "truck");
                game.physics.p2.enable(this.sprite);
                this.sprite.body.data.gravityScale = 0;
                this.sprite.body.clearShapes();
                this.sprite.body.addPolygon({}, [[0, 184], [559, 187], [558, 2], [222, 2], [222, 45], [166, 45], [113, 85], [21, 103], [3, 167]]);
                this.sprite.anchor.x = 0.57;
                this.sprite.anchor.y = 0.5;
            break;

        case "van":
                this.sprite = game.add.sprite(_x, _y - 220, "van");
                game.physics.p2.enable(this.sprite);
                this.sprite.body.data.gravityScale = 0;
                this.sprite.body.clearShapes();
                this.sprite.body.addPolygon({}, [[2, 179], [650, 179], [650, 153], [635, 153], [635, 62], [609, 0], [180, 0], [96, 68], [10, 99]]);
                this.sprite.anchor.x = 0.53;
                this.sprite.anchor.y = 0.42;
            break;

    }


    this.sprite.body.setCollisionGroup(ObstaclesCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    this.sprite.body.static = true;
}

Car.prototype.delete = function () {
    this.sprite.destroy();
}
