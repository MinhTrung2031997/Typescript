export type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

export type Point = {
  x: number;
  y: number;
};

type ReadonlyPoint = ReadOnly<Point>;

function makeReadonly<T>(object: T): Readonly<T> {
  return { ...object };
}

const readonly = makeReadonly({ x: 3, y: 5 });

console.log(readonly);
