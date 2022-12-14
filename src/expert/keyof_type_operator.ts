type Student = {
  name: string;
  age: number;
  location: string;
};

const john: Student = {
  name: "john",
  age: 23,
  location: "Melbourne",
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];
  console.log("Getting", key, value);
  return value;
}

const age = logGet(john, "age");

function logSet<Obj, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
  value: Obj[Key]
) {
  console.log("Setting", key, value);
  obj[key] = value;
}

logSet(john, "age", 23);
