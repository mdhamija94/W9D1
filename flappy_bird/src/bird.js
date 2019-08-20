export default class Bird {
  constructor(dimensions) {
    this.velocity = 0;
    this.dimensions = dimensions;
    this.position = {y: dimensions.height/2, x: dimensions.width/3};
  }

  drawBird(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.position.x, this.position.y, 40, 30);
  }

  animate(ctx) {
    this.drawBird(ctx);
  }
}