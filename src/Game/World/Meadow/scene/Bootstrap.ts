import Phaser from 'phaser'
export class Bootstrap extends Phaser.Scene
{
	constructor()
	{
		super('bootstrap')

	}

    init()
    {

    }

	preload()
    {
        this.load.multiatlas('ground', './assets/meadow/meadow.json', 'assets');
    }

    create()
    {
        const block = this.add.image(0,0, 'ground', 'Moor');
        Phaser.Display.Align.In.Center(block, this.add.zone(400, 300, 800, 600));
        this.createNewGame();
    }


    update() {

    }

    private createNewGame()
    {
        this.scene.launch('game');
    }
}
