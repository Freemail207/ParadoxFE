import Phaser from 'phaser';

import { Bootstrap, Game } from './scene'

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#8ad4d0',
    scale: {
        mode: Phaser.Scale.ScaleModes.RESIZE,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        },
    },
    scene: [Bootstrap, Game],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Phaser.Game(config)
