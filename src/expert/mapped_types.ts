export type Point = {
  x: number;
  y: number;
  z: number;
};

// type Readonly<T> = {
//   readonly [Item in keyof T]: T[Item];
// };

const center: Readonly<Point> = {
  x: 5,
  y: 7,
  z: 8,
};
