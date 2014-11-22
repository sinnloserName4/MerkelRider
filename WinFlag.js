function WinFlag(_x,_y) {
    this.sprite = game.add.sprite(_x, _y, "chopper");

    game.physics.p2.enable(this.sprite, true);

    this.sprite.body.setCollisionGroup(winFlagCollisionGroup);
    this.sprite.body.collides(m.chopper.bikeCollisionGroup);
    this.sprite.body.static = true;
}