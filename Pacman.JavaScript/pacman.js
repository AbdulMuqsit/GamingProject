
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload()
{
	game.load.tilemap('maze', 'assets/maze.json', null, Phaser.Tilemap.TILED_JSON);
	game.load.image('sprite', 'assets/pacman_spritesheet1.png');
}	

var map;
var layer;

function create()
{
	game.stage.backgroundColor = '#000000';
	map = game.add.tilemap('maze');
	map.addTilesetImage('Pacman-Maze', 'sprite');
	layer = map.createLayer('TileLayer1');
	layer.resizeWorld();
}

function update()
{

}
