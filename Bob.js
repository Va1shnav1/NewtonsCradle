class Bob{
    constructor(x, y, r){
        var options={
            restitution:1,
            density:0.8,
            friction:0
        }
        this.r=r;
        this.body = Bodies.circle(x, y, r, options);
        World.add(world, this.body);
    }
    display(){
        push();
        var pos=this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
        
    }
}