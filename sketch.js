
var  gameState=0;
var playerCount;
var form,player,game;
var database;
var allPlayers=[];
function setup(){
    createCanvas(500,500);
    database=firebase.database();
   game=new Game();
   game.start();

}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1)

    }
    if(gameState===1){
        clear ()
        game.play()

    }
   
}

