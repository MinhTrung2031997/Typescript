type Point = {
  readonly x: number;
  readonly y: number;
};

const point: Point = { x: 4, y: 6 };

/**Properties assignment */
export abstract class Animal {
  protected name: string;
  protected sound: string;
  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }

  say() {
    console.log("animal");
  }
}

export class Chicken extends Animal {
  constructor(name: string, sound: string) {
    super(name, sound);
  }

  //   say() {
  //     console.log(this.sound);
  //   }
}

export class Dog extends Chicken {}

const chicken = new Chicken("chicken", "oooo");
console.log(chicken.say());
