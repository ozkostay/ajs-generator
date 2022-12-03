export default class Team {
  constructor() {
    this.enemies = [];
  }

  add(item) {
    this.enemies.push(item);
  }

  * iterator() {
    let index = 0;
    // let lastIndex;
    const enemies = [...this.enemies];
    while (index < enemies.length) {
      yield enemies[index];
      index += 1;
    }
  }

  getOneEnemy(iter) {
    console.log(iter.next().value);
  }
}
