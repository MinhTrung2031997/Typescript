class Person {
  private _age: number;
  constructor(_age: number) {
    this._age = _age;
  }

  growOld = () => {
    this._age++;
  };

  getAge() {
    return this._age;
  }

  get age() {
    return this._age;
  }
}

const person = new Person(1);
const growOld = person.growOld;
growOld();
console.log(person.getAge());
console.log(person.age);
