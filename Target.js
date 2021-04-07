class Target {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body  = Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.body);
    }
    display(){
        var ps = this.body.position;
        push();
        translate(ps.x,ps.y)
        rectMode(CENTER);
       rect(0,0,this.width,this.height);
        pop();
    }
}