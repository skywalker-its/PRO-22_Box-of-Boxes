class Box {
    constructor(x, y, width, height){
        var options = {
            'restitution':0.8,
            'friction':0.3,
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display() {
        
    }
}