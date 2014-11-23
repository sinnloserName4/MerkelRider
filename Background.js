function Background( _x, _y, type)
{
    this.sprite = game.add.sprite(_x, _y - 532, type);
    this.sprite2 = game.add.sprite(_x + 2937, _y - 532, type);
}

Background.prototype.delete = function()
{
    this.sprite.destroy();
    this.sprite2.destroy();
}