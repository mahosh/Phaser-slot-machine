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
}
//excuted after everything is loaded
function create(){
    this.add.image(400, 300, 'background');
}
//this is executed multiple times per second 
function update(){

}