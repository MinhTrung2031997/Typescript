type Animal = {
  name: string;
  voice(): string;
};

class Cat implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  voice(): string {
    return "meow meow";
  }
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  voice(): string {
    return "woof";
  }
}

const cat = new Cat("cat");
console.log(cat.voice(), cat.name);

interface Plant {
  name: string;
  pesticides(): string;
}

class Banana implements Plant {
  constructor(public name: string) {}
  pesticides(): string {
    return "banana";
  }
}
