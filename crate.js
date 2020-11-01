class Crate {
    constructor(x, y, w, h) {
      const options = {
        restitution: 0.5
      };
      this.body = Matter.Bodies.rectangle(x, y, w, h, options);
      Matter.World.add(myWorld, this.body);
      this.w = w;
      this.h = h;
      this.image= loadImage("images/gift.jpg");
    }
  
    show() {
      var pos = this.body.position;
      var angle= this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      fill("pink");
      imageMode(CENTER);
     image(this.image,0,0, this.w, this.h);
      pop();
    }
  }

  