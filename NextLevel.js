function NextLevel(_last)
{
    this.last = _last
    this.level = 0;
    currentState.delete();
    game.camera.reset();
    this.nextButton = game.add.button(300, 250, "nextLevel", Next, this);
}

NextLevel.prototype.update = function()
{

}

function Next()
{
    //switchCase
    currentState = new MainMenu();
}