var game = new Phaser.Game(800, 600, Phaser.AUTO, "", { preload: preload, create: create, update: update, pauseUpdate: pauseUpdate, render: render });

var arrowkeys;
var m;
var win;
var ObstaclesCollisionGroup;
var winFlagCollisionGroup;
var currentState;
var Obstacles;
var snow;
var pausebutton;
var schleier;

var DEBUG = false;

function preload()
{
    game.load.image("chopper", "content/chopper2.png");
    game.load.image("tire", "content/tire.png");
    game.load.image("start_button", "content/start_game.png");
    game.load.image("credits", "content/credits.png");
    game.load.image("bollard", "content/bollard.png")
    game.load.image("rampe", "content/rampe.png");
    game.load.image("tinysnowflake", "content/tinysnowflake.png");
    game.load.image("mediumsnowflake", "content/mediumsnowflake.png");
    game.load.image("hugesnowflake", "content/hugesnowflake.png");
    game.load.image("merkel", "content/merkel.png");
    game.load.image("nextLevel", "content/nextlevel.png");
    game.load.image("hinweis1", "content/joachim_hinweis1.png");
    game.load.image("hinweis2", "content/joachim_hinweis2.png");
    game.load.image("hinweis3", "content/joachim_hinweis3.png");
    game.load.image("ground", "content/ground.png");
    game.load.image("box", "content/box.png");
    game.load.image("explosion", "content/explosion.png");
    game.load.image("baum", "content/tannenbaum.png");


    //pause menü
    game.load.image("pausemenu", "content/pausemenü.png");
    game.load.image("pausebutton", "content/pausebutton.png");
    game.load.image("continue", "content/continue.png");
    game.load.image("selectlevel", "content/selectlevel.png");
    game.load.image("restart", "content/restart.png");
    game.load.image("exit", "content/exit.png");
    game.load.image("continue_hover", "content/continue_hover.png");
    game.load.image("selectlevel_hover", "content/selectlevel_hover.png");
    game.load.image("restart_hover", "content/restart_hover.png");
    game.load.image("exit_hover", "content/exit_hover.png");
    game.load.image("level_geschafft", "content/levelgeschafft.png");
    game.load.image("verloren", "content/verloren.png");
    game.load.image("continue_disabled", "content/continue_disabled.png");
    game.load.image("schleier", "content/schleier.png");


    game.load.image("car1", "content/car1.png");
    game.load.image("car2", "content/car2.png");
    game.load.image("sportcar", "content/sportcar.png");
    game.load.image("truck", "content/truck.png");
    game.load.image("van", "content/van.png");
    
    //background
    game.load.image("clean_back", "content/background_clean.png");
    game.load.image("night_back", "content/background_night.png");
    game.load.image("sunset_back", "content/background_sunset.png");
    game.load.image("city_back", "content/city_background.png");

    game.load.spritesheet("clapping","content/sauer.png", 170,113);

    game.time.advancedTiming = true;
}

function create()
{
    Obstacles = new Array(100);
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.physics.p2.setImpactEvents(true);
    game.physics.p2.gravity.y = 300;

    arrowkeys = game.input.keyboard.createCursorKeys();
    ObstaclesCollisionGroup = game.physics.p2.createCollisionGroup();
    winFlagCollisionGroup = game.physics.p2.createCollisionGroup();

    schleier = game.add.sprite(0, 0, "schleier");

    currentState = new MainMenu();        //start off with the main menu

    pausebutton = new Pause();

    game.input.onDown.add(unpause, self);
    pausebutton.pausebutton.alpha = 0;
}

function update()
{
    currentState.update();
    game.world.bringToTop(schleier);
    
}

function render()
{
    //if (DEBUG)
    //{
        game.debug.text(game.time.fps || '--', 2, 14, "#00ff00");
        game.debug.text(currentState.level, 2, 25, "#00ff00");
        game.debug.text(game.camera.position.x, 2, 45, "#00ff00");
        game.debug.text(game.camera.position.y, 2, 60, "#00ff00");
        if ((currentState.level != "MainMenu") && (currentState.level != 0)) {
            game.debug.text("flip:" + m.checkForFlip() || '--', 2, 75, "#00ff00");
        }
        if ((currentState.level != "MainMenu") && (currentState.level != 0)) {
            game.debug.text("is on Ground:" + m.onGround, 2, 90, "#00ff00");
        }
    //}
}