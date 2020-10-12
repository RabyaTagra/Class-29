class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

       this. sling1 = loadImage ("./sprites/sling1.png")
       this. sling2 = loadImage ("./sprites/sling2.png")
       this. sling3 = loadImage ("./sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
      image(this.sling1, 200, 110, 30, 110);
      image(this.sling2, 180, 115, 30, 60);
      
      
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(84, 39, 15);
            line(pointA.x- 15, pointA.y, pointB.x + 20, pointB.y + 5);
            line(pointA.x- 15, pointA.y, pointB.x - 15, pointB.y + 10);
            image(this.sling3,pointA.x - 25 , pointA.y - 10  ,   10, 20);
        }
    }
    
}