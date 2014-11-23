function Background( _x, _y, type)
{
    this.width = 2937;
    this.sprite = game.add.sprite(_x, _y - 532, type);
    this.sprite2 = game.add.sprite(_x + this.width, _y - 532, type);
    this.sprite3 = game.add.sprite(_x + 2*this.width, _y - 532, type);
    this.sprite4 = game.add.sprite(_x + 3 * this.width, _y - 532, type);
    this.sprite5 = game.add.sprite(_x + 4 * this.width, _y - 532, type);
    this.sprite6 = game.add.sprite(_x + 5 * this.width, _y - 532, type);
    this.sprite7 = game.add.sprite(_x + 6 * this.width, _y - 532, type);
    this.sprite8 = game.add.sprite(_x + 7 * this.width, _y - 532, type);
}

Background.prototype.delete = function()
{
    this.sprite.destroy();
    this.sprite2.destroy();
    this.sprite3.destroy();
    this.sprite4.destroy();
    this.sprite5.destroy();
    this.sprite6.destroy();
    this.sprite7.destroy();
    this.sprite8.destroy();
}