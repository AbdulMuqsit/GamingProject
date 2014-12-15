class Pacman {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.tilemap('maze', 'assets/some.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('sprites', 'assets/sprites.png');
    }

    create() {
        var map = this.game.add.tilemap('maze');
        map.addTilesetImage('sprites', 'sprites');
        var layer = map.createLayer('Back');
        layer.resizeWorld();
    }

}

window.onload = () => {

    var game = new Pacman();

};