export function EquippedAtk(player) {
  let attack = 0;
  let i;
  for(i = 0; i<player.equipped.length; i++) {
    attack = player.equipped[i].attackPower + attack;
  }
  player.attackPow = (player.stats.str * player.stats.dex + attack);
}

export function EquippedDef(player) {
  let defense = 0;
  let i;
  for(i = 0; i<player.equipped.length; i++) {
    attack = player.equipped[i].attackPower + attack;
  }
  player.defense = (player.stats.str * player.stats.dex + attack);
}

export function Player(name, stats) {
  this.name = name;
  this.stats = stats;
  this.inventory = [];
  this.equipped = [];
  this.hp = this.stats.str * 1.5;
  this.mp = this.stats.cha * 1.5;
  this.xp = 0;
  this.attackPow = this.stats.str * this.stats.dex;
  this.defense = this.stats.wil * this.stats.str;
}

export function Stats(str, dex, ckn, wil, cha) {
  this.str = str;
  this.dex = dex;
  this.ckn = ckn;
  this.wil = wil;
  this.cha = cha;
}

export function MonsterStats(health, attack, defense, missChance) {

  this.health = health;
  this.attack = attack;
  this.defense = defense;
  this.missChance = missChance;
}

export function Monster(name, stats, loot) {
  this.name = name;
  this.stats = stats;
  this.hp = this.stats.health;
  this.loot = loot;
}

export function Item(name, attackPower, defensePower, magic, value) {
  this.name = name;
  this.attackPower = attackPower;
  this.defensePower = defensePower;
  this.magic = magic;
  this.value = value;
}

export function MonsterAttack(player, monster) {
  let monstAttack = Math.random(monster.stats.attack);
  let playerDefense = player.stats.defensePower;

    if (monstAttack > playerDefense) {
      player.hp = ((player.hp) - (monstAttack-playerDefense));
    }


}
export function PlayerAttack(player, monster) {
  let playerAttack = Math.random(player.attackPower);
  let monsterDefense = monster.stats.defense;

    if (playerAttack > monsterDefense) {
      monster.hp = ((monster.hp) - (playerAttack-monsterDefense));
    }


}
