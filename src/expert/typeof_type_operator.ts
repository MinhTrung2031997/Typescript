const center = {
  x: 0,
  y: 0,
  z: 0,
};

type Point = typeof center;

const unit: typeof center = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
};

const personResponse = {
  name: "john",
  email: "john@example.com",
  firstName: "John",
  lastName: "Doe",
};

type PersonResponse = typeof personResponse;

function processResponse(person: PersonResponse) {
  console.log(`${person.firstName} ${person.lastName}`);
}
