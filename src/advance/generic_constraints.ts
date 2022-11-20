type NameFileds = {
  firstName: string;
  lastName: string;
};
function addFullName<T extends NameFileds>(obj: T): T & { fullName: string } {
  return { ...obj, fullName: `${obj.firstName} ${obj.lastName}` };
}

const join = addFullName({
  email: "minhtrung2031997@gmail.com",
  firstName: "trung",
  lastName: "nguyen",
});

console.log(join);
