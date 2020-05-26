import Phaser from "../lib/phaser.js";

export default class Game extends Phaser.Scene {
    constructor() {
        super('game');
    }

    init() {

    }

    preload() {
        this.load.image('demo-image', 'assets/images/braithwaite.jpg');
    }

    create() {
        //coordinates are the center of the object where you want to insert the image: in this case, 1/2 of 960x540
        this.add.image(480, 270, 'demo-image').setScale(0.5);
    }

    update() {
        
    }
};