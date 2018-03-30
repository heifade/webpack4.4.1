import { Person } from "./Person";

export class User extends Person {
  constructor(id: number, name: string) {
    super(id, name);
  }
}
