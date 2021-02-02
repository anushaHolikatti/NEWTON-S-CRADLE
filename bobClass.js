class Bob{
    constructor(x, y, width, height, angle) {
        var options = {
            'isStactic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
this.body = Bodies.circle(x,y,20, options);
this.width = 20;
this.hight = 20;
World.add(world,this.body);
}
display(){
    push();
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 20, 20);
    pop();
}
}