class Blocks extends BaseClass {
    constructor(x, y,width,height ){
      var options = {
        'restitution':0.1,
        'friction':0
        
    }
      super(x,y,width,height);
      
    }

    display(){

      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
       
         pop();
       }
       
     }
    }
  
  