function Snow() {
    this.hugeSnowFlakes = game.add.group();
    this.mediumSnowFlakes = game.add.group();
    this.tinySnowFlakes = game.add.group();
    this.createSnowFlakes();
}

Snow.prototype.createSnowFlakes = function() {
    var a, b, c;

    for (var i = 0; i < 100; i++) {
        a = this.tinySnowFlakes.create(game.world.randomX, game.world.randomY, "tinysnowflake");
        b = this.mediumSnowFlakes.create(game.world.randomX, game.world.randomY, "mediumsnowflake");
        c = this.hugeSnowFlakes.create(game.world.randomX, game.world.randomY, "hugesnowflake");

        game.physics.p2.enable(a);
        game.physics.p2.enable(b);
        game.physics.p2.enable(c);

        a.body.velocity.x = -100;
        a.body.velocity.y = 200;
        a.body.data.gravityScale = 0;

        b.body.velocity.x = -100;
        b.body.velocity.y = 150;
        b.body.data.gravityScale = 0;

        c.body.velocity.x = -50;
        c.body.velocity.y = 150;
        c.body.data.gravityScale = 0;
    }
}


Snow.prototype.update = function () {
    this.tinySnowFlakes.forEach(function (item) {
        if (item.body.y > game.world.height) {
            item.body.x = game.world.randomX;
            item.body.y = -50;
        }
        item.body.velocity.x = -100;
        item.body.velocity.y = 200;

    });
    this.mediumSnowFlakes.forEach(function (item) {
        if (item.body.y > game.world.height) {
            item.body.x = game.world.randomX;
            item.body.y = -50;
        }
        item.body.velocity.x = -100;
        item.body.velocity.y = 150;
    });
    this.hugeSnowFlakes.forEach(function (item) {
        if (item.body.y > game.world.height) {
            item.body.x = game.world.randomX;
            item.body.y = -50;
        }
        item.body.velocity.x = -50;
        item.body.velocity.y = 150;
    });
}

Snow.prototype.delete = function () {
    this.tinySnowFlakes.destroy();
    this.mediumSnowFlakes.destroy();
    this.hugeSnowFlakes.destroy();

    /*
    this.tinySnowFlakes.forEach(function (item) {
        this.remove(item);
    });
    this.mediumSnowFlakes.forEach(function (item) {
        this.remove(item);
    });
    this.hugeSnowFlakes.forEach(function (item) {
        this.remove(item);
    });
    */
}