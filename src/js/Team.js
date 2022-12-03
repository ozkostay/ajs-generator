export default class Team {
  constructor() {
    this.enemies = [];
  }

  add(item) {
    this.enemies.push(item);
  }

  * iterator() {
    let index = 0;
    const enemies = [...this.enemies];
    while (index < enemies.length) {
      yield enemies[index];
      index += 1;
    }
  }

  // * [Symbol.iterator]() {
  //   let index = 0;
  //   const enemies = [...this.enemies];
  //   while (index < enemies.length) {
  //     yield enemies[index];
  //     index += 1;
  //   }
  // }

  getOneEnemy(iter) {
    console.log(iter.next().value);
  }
}
