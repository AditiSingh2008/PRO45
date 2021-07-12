var playerImg,bgImg,sImg;
var form;
var database;


function preload(){
  
  bgImg=loadImage("bg.jpg")
  sImg=loadImage("seacrh 4.png")
  AtlasApi()
  //greeting()
  GetTime()
}

function setup(){
 //database = firebase.database();
 //console.log(database);
  createCanvas(500,800);

 // player = createSprite(250,250,10,10);
  //player.addImage("playerImg")

form= new Form()

}

  //var hypnoticBallPosition = database.ref('ball/position');
  //hypnoticBallPosition.on("value", readPosition, showError);


function draw(){
  background(bgImg);
 // image (playerImg,200,350,0,0)
   /* if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }*/
    
    form.display();
    var time=new Date()
    var hour=time.getHours()
    //console.log(form.input2.value())
    
    var name=form.input.value();
    //console.log(name)
    if (hour>=06 && hour<=20){
    form.greeting.html("Good Morning"+name)
    form.greeting.position(500,120)
    drawSprites();
    }
  
}
  
  async function AtlasApi(){
    var response=await fetch("data/countries.json")
    var responseJSON = await response.json();
    for(var i=0;i<244;i++){
      if(form.input2.value()===responseJson[i].city){
  console.log(responseJson[i].city)
        }
     }}
