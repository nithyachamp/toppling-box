class Box
{
    
    constructor(x,y,width,height)
    {
        var box_options={
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body=Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);

    }

    display()
    {
        Push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

};