export class Person {
  constructor(public id: number, public name: string) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }
}
