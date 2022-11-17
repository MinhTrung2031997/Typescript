type Square = {
  size: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

function isSquare(shape: Shape): shape is Square {
  return "size" in shape;
}

function isRectangle(shape: Shape): shape is Rectangle {
  return "width" in shape;
}

const shape: Shape = {
  height: 5,
  width: 7,
};

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }

  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  const _ensure: never = shape;
  return _ensure;
}

console.log(area(shape));
