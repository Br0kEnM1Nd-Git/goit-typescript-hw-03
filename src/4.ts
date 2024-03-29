class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  public getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  public comeIn(person: Person) {
    if (this.door) this.tenants.push(person);
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  public openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) this.door = true;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
