class Chain{
    constructor(body1, point2){
    var option = {
    length: 200,
    stiffness: 0.4,
    bodyA: body1,
    pointB: point2
  }
  this.chain = Constraint.create(option);
  World.add(world, this.chain);
    }
    display(){ 
        var pointa = this.chain.body1.position;
        var pointb = this.chain.point2.position;
        strokeWeight(4);
        line(pointa.x, pointa.y, pointb.x, pointb.y);
    }
}