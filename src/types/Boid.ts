

export class Boid {
    position: { x: number, y: number }
    velocity: { x: number, y: number }
    acceleration: { x: number, y: number }
    maxSpeed: number
    rotation: number
    lineLength: number

    constructor(data: {
        position: { x: number, y: number },
        velocity: { x: number, y: number },
        acceleration: { x: number, y: number },
        maxSpeed: number,
        rotation: number,
        lineLength: number,
    }) {
        this.position = data.position;
        this.velocity = data.velocity;
        this.acceleration = data.acceleration;
        this.maxSpeed = data.maxSpeed;
        this.rotation = data.rotation;
        this.lineLength = data.lineLength;
    }

    draw(ctx: CanvasRenderingContext2D): void {
        console.log(ctx);

        // ctx.strokeRect(this.position.x, this.position.y, this.lineLength, this.lineLength);
        // ctx.fillRect(130, 190, 40, 60);
    }

    update(): void { 
        this.velocity = {
            x: Math.max(this.velocity.x + this.acceleration.x, this.maxSpeed),
            y: Math.max(this.velocity.y + this.acceleration.y, this.maxSpeed),
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
