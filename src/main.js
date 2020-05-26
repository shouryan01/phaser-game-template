import Phaser from "./lib/phaser.js";
import Game from "./scenes/Game.js";

export default new Phaser.Game({
    type:Phaser.AUTO,
    width: 960,
    height: 540,
    scene: [Game,],
    // arcade: {
    //     gravity: {
    //         y: 200,
    //     },
    //     debug: true,
    // }
})