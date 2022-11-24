export type RequiredDeclared<T> = {
  [P in keyof T]-?: T[P];
};

type PartialPoint = {
  x?: number;
  y?: number;
};

export type Point = Required<PartialPoint>;

export type CircleConfig = {
  color?: string;
  radius?: number;
};

class Circle {
  private config: Required<CircleConfig>;
  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? "green",
      radius: config.radius ?? 0,
    };
  }

  draw() {
    console.log(`Color: ${this.config.color}, Radius: ${this.config.radius}`);
  }
}
