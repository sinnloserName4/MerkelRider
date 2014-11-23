function Box(_x, _y)
{
    this.sprite = game.add.sprite(_x,_y-205,"box")
}

Box.prototype.delete = function()
{
    this.sprite.destroy();
}