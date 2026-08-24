export class Boid {
    position: { x: number, y: number }
    velocity: { x: number, y: number }
    acceleration: { x: number, y: number }

    constructor(posX: number, posY: number) {
	this.position = { x: posX, y: posY };
	this.velocity = { x: 0, y: 0 };
	this.acceleration = { x: 0, y: 0 };
    }

    update(): void { 
	this.velocity = {
	    x: this.velocity.x + this.acceleration.x,
	    y: this.velocity.y + this.acceleration.y,
	};
	this.position = {
	    x: this.position.x + this.velocity.x,
	    y: this.position.y + this.velocity.y,
	};
    }

    // separate(boids: Boid[]): void {}

    // align(boids: Boid[]): {x: number, y: number} {
    //     let velocity = boids.reduce((accVelocity, b: Boid) => {
    //         accVelocity.x += boid.velocity.x;
    //         accVelocity.y += boid.velocity.y;
    //     }, { x: 0, y: 0 });
    //     
    //     return {
    //         x: velocity.x / boids.length,
    //         y: velocity.y / boids.length,
    //     };
    // }

    // cohesion(): void {}
}
