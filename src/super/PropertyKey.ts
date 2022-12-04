const str: string = "key";
const num: number = 1997;
const sym: symbol = Symbol();

const valid = {
  [str]: "valid",
  [num]: "valid",
  [sym]: "valid",
};

const obj = {};

let validPropertyKey: PropertyKey;
validPropertyKey = str;
validPropertyKey = num;
validPropertyKey = sym;
