class Sling {
    constructor(bodyA,pointB){
      var options={
        bodyA:bodyA,pointB:pointB,stiffness:1,length:950
      }
      this.pointB=pointB;
      this.sling=Constraint.create(options)
      World.add(world, this.sling);
     }
     display(){
        push();
        if(this.sling.bodyA){
    var pointA=this.sling.bodyA.position;
         var pointB=this.pointB;
 strokeWeight(3);
 line(pointB.x, pointB.y, pointA.x, pointA.y)
         pop();
       }
     }
   }