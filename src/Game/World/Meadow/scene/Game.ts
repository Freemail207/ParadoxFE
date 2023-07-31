import Phaser from 'phaser'
import {
    createWorld,
    addEntity,
    addComponent,
    System,
    IWorld,
} from 'bitecs'
import {ArcadeSprite, ArcadeSpriteStatic, Position} from "@screens/Game/Physics/components";

enum Textures
{
    GroundDefault = 1,
    GroundMoor = 1,
}

const TextureKeys = [
    'meadow_default.png',
    'meadow_moor.png',
];

export class Game extends Phaser.Scene
{
    private world?: IWorld
    private spriteSystem?: System
    private spriteStaticSystem?: System
    private movementSystem?: System
    private playerSystem?: System
    private cpuSystem?: System
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    constructor()
    {
        super('game')
    }

    init()
    {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create()
    {
        const { width, height } = this.scale
        this.world = createWorld();
        const groundDefault = addEntity(this.world);

        addComponent(this.world, Position, groundDefault);
        const spriteStaticGroup = this.physics.add.staticGroup()

        Position.x[groundDefault] = 100;
        Position.y[groundDefault] = 100;
        ArcadeSpriteStatic.texture[groundDefault] = Textures.GroundDefault
        console.log('13', groundDefault);

    }


    update() {
        if(!this.world) return
        this.spriteStaticSystem?.(this.world);

    }
}
