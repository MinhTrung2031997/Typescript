type IsNumber<T> = T extends number ? "number" : "other";

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

export type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends symbol
  ? "symbol"
  : T extends bigint
  ? "bigint"
  : T extends Function
  ? "function"
  : "object";

function typeName<T>(t: T): TypeName<T> {
  return typeof t as TypeName<T>;
}

typeName(123);
console.log(typeName(function () {}));
