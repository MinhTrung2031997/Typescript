type IsArray<T> = T extends Array<infer Member> ? "array" : "other";

type WithArray = IsArray<string[]>;
type WithoutArray = IsArray<number>;

type UnboxArray<T> = T extends Array<infer Member> ? Member : T;

type UnboxArrayStringArray = UnboxArray<string[]>;
type UnboxArrayNumberArray = UnboxArray<number[]>;
type AnythingElse = UnboxArray<string>;

export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
  };
}

function logPerson(person: ReturnType<typeof createPerson>) {
  console.log(`Person ${person.firstName} ${person.lastName}`);
}
