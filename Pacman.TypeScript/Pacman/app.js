var Pacman = (function () {
    function Pacman() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    Pacman.prototype.preload = function () {
        this.game.load.tilemap('maze', 'assets/some.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('pacman', 'assets/pacman.png');
    };

    Pacman.prototype.create = function () {
        var map = this.game.add.tilemap('maze');
        map.addTilesetImage('pacman', 'pacman');
        var layer = map.createLayer('Tile');
        layer.resizeWorld();
    };
    return Pacman;
})();

window.onload = function () {
    var game = new Pacman();
};
//# sourceMappingURL=app.js.map
