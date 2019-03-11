class Pokemon {
  constructor(name, attack, defense, health, type) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.health = health;
    this.initial_health = health;
    this.type = type;
  }
  takeDamage(amount) {
    const updated_health = this.health - amount;
    this.health = updated_health < 0 ? 0 : updated_health;
  }
  attackOpponent(opponent) {
    const damage = this.attack - opponent.defense;
    opponent.takeDamage(damage < 0 ? 1 : damage);
  }
  display() {
    const { name, type, initial_health, health } = this;
    return `${name.toUpperCase()} (${type.toUpperCase()}) ${health}/${initial_health}`;
  }
}

const pika = new Pokemon("pikachu", 5, 3, 10, "electricity");
const char = new Pokemon("charizard", 5, 3, 10, "fire");

pika.attackOpponent(char);
