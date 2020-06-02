//initiate the Phaser framework
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
//loads the game assets before the game starts
function preload(){
    this.load.image('background', 'assests/slotContainer.png');
    this.load.image('potion1', 'assests/potion1.png');
    this.load.image('potion2', 'assests/potion2.png');
    this.load.image('potion3', 'assests/potion3.png');
    this.load.image('potion4', 'assests/potion4.png');
    this.load.image('button_spin', 'assests/button_spin.png');
    this.load.image('button_stop', 'assests/button_stop.png');

}
//excuted after everything is loaded
function create(){
    this.add.image(400, 300, 'background');
    let buttons = [];
    let firstSpinButton = this.add.image(400, 550, 'button_spin');
    let secondSpinButton = this.add.image(400, 550, 'button_spin');
    let stopButton = this.add.image(400, 550, 'button_stop');
    firstSpinButton.setInteractive();
    secondSpinButton.setInteractive();
    stopButton.setInteractive();
    secondSpinButton.input.enabled = false;
    stopButton.input.enabled = false;
    secondSpinButton.visible = false;
    stopButton.visible = false;
    buttons.push(firstSpinButton,secondSpinButton,stopButton);
    firstSpinButton.on('pointerdown', () => {
        buttonClick(buttons,0);
    });
    secondSpinButton.on('pointerdown', () => {
        buttonClick(buttons,1);
    });
    stopButton.on('pointerdown', () => {
        buttonClick(buttons,2);
    });


    


}

//this is executed multiple times per second 
function update(){
    
}
function buttonClick(arr, index) {
    switch(index) {
        case 0:
            arr[0].input.enabled = false;
            arr[0].alpha = 0.5;
            setTimeout(() => {
                arr[0].visible = false;
                arr[0].alpha = 1;
                arr[1].input.enabled = true;
                arr[1].visible = true;
            }, 1000);
        break;
        case 1:
            arr[1].input.enabled = false;
            arr[1].visible = false;
            arr[2].input.enabled = true;
            arr[2].visible = true;
        break;
        case 2:
            arr[2].input.enabled = false;
            arr[2].visible = false;
            arr[0].input.enabled = true;
            arr[0].visible = true;
        break;
      }
}