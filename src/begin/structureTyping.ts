export type Point2D = { x: number; y: number };
export type Point3D = { x: number; y: number; z: number };

let point2D: Point2D = { x: 3, y: 4 };
let point3D: Point3D = { x: 5, y: 7, z: 9 };

//**Extra info ok*/
point2D = point3D;
function takePoint2D(point: Point2D) {
  return point;
}

console.log(takePoint2D(point3D));
