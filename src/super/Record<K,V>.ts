export type Persons = Record<string, any>;
const persons: Persons = {};

console.log(persons);

export type PersonsVerbose = { [Key: string]: { name: string; role: string } };
const personsVerbose: PersonsVerbose = {};
personsVerbose.$or = { name: "John", role: "admin" };
personsVerbose.$and = { name: "Jane", role: "Owner" };
personsVerbose["11"] = { name: "trung", role: "user" };

console.log(personsVerbose);

export type Roles = "admin" | "owner";
let peopleWithRoles: Record<Roles, string[]> = {
  admin: ["Jane"],
  owner: ["John"],
};

peopleWithRoles = {
  admin: ["Jane", "John"],
  owner: ["Jane", "John"],
};

export type Point = Record<"x" | "y", number>;

export type PageInfo = {
  id: string;
  title: string;
};

export type PagesVerbose = {
  home: PageInfo;
  services: PageInfo;
  about: PageInfo;
  contact: PageInfo;
};

export type PagesRecord = Record<
  "home" | "services" | " about" | "contact",
  PageInfo
>;
