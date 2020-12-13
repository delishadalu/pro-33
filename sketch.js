var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles ;
var plinkos = [];
var divisions=[]
var score=0;
var turn=0;

var divisionHeight=300;
var score =0;

var gamestate="play"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   
    }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

  
    
}
 


function draw() {
  background("black");
  
  
  fill ("white")
  textSize(20)
 text("Score : "+score,20,30);
 
 
 Engine.update(engine);
 


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 console.log(gamestate)
  
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

  
   text(500,20,height-divisionHeight+20)
   text(500,100,height-divisionHeight+20)
   text(500,180,height-divisionHeight+20)
   text(500,260,height-divisionHeight+20)
   text(100,340,height-divisionHeight+20)
   text(100,260+80+80,height-divisionHeight+20)
   text(100,500,height-divisionHeight+20)
   text(200,580,height-divisionHeight+20)
   text(200,260+80+80+80+80+80,height-divisionHeight+20)
   text(200,740,height-divisionHeight+20)

   if(particles != null)
   {
        particles.display()
        if (particles.body.position.y>760)
        {  
         if (particles.body.position.x < 300) 
         {
             score=score+500;      
             particles=null;
                                     
         }


         else if (particles.body.position.x < 600 && particles.body.position.x > 301 ) 
         {
               score = score + 100;
               particles=null;
              

         }
         else if (particles.body.position.x < 900 && particles.body.position.x > 601 )
         {
               score = score + 200;
               particles=null;
              

         }      
         
   }





   }
   
   if(turn>5)
   {
     gamestate= "end";
     textSize(100);
     fill("red")
     text("GameOver", 150, 250);
         
   }
  
}

function mousePressed()
{
  if(gamestate!=="end")
  {
      turn++;
     particles =new Particle(mouseX, 10, 10); 
     // particle display only if particle body present.
  }   
}
// remove the particle arrays.(divisions were blinking off)