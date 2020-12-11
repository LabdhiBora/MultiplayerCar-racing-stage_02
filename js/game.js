class Game{
    constructor(){

    }
    getState(){
        database.ref("gameState").on("value",()=>{
            gameState=data.val()
        })
    
    }
    update(state){
     database.ref("/").update({ 
         gameState:state
     })
    }
    start(){
        if (gameState===0){
            player = new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
    play(){
        form.hide();
        textSize(30);
        text("Game start",120,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var y=130;
            for(var i in allPlayers){
             if(i==="player"+player.index){
                 fill ("red")
             }    
             else{
                 fill("black")
             }      
             y=y+20
             textSize(15)
             text(allPlayers[i].name +":"+allPlayer[i].distance,120,y)     
            }
            if(keyIsDown(UP_ARROW )&& player.index!=null){
                player.distance+=50
                player.update()
                
            }
        }
    }

}