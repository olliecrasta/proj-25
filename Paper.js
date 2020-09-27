class Paper {
    constructor(x,y,radius){
        var options = {
            restitution : 0.4,
            friction : 0.4,
            density : 1.2

        }
        this.paperball = Bodies.rectangle(x,y,radius,radius,options);
        this.radius = radius;
        World.add(world,this.paperball);
    }

    display(){
       
        push();
        imageMode(CENTER);
        image(paperImg,this.paperball.position.x,this.paperball.position.y,70,70)
       // circle(this.paperball.position.x,this.paperball.position.y,this.radius);
        pop();
    }


}