export type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Point = {
  x: number;
  y: number;
};

type Result = Partial<Point>;

export class State<T> {
  constructor(public current: T) {}

  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 3, y: 4 });
state.update({ x: 4 });
