export default class Team {
  constructor() {
    this.enemies = [];
    this.iterator = this[Symbol.iterator]();
  }

  add(item) {
    this.enemies.push(item);
    this.iterator = this[Symbol.iterator]();
  }

  * [Symbol.iterator]() {
    let index = 0;
    const enemies = [...this.enemies];
    while (index < enemies.length) {
      yield enemies[index];
      index += 1;
    }
  }

  getOneEnemy() {
    return this.iterator.next().value;
  }
}
