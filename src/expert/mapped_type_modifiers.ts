export type Point = {
  readonly x: number;
  y?: number;
};

export type Mapped<T> = {
  -readonly [P in keyof T]+?: T[P];
};

export type result = Mapped<Point>;

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

export class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 4, y: 8, z: 3 });
state.update({ x: 5, y: 9 });

console.log(state.current);
