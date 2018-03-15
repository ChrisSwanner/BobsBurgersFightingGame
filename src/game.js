import $ from 'jquery';

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
  this.hp = this.stats.health;
  this.mp = this.stats.cha * 15;
  this.xp = 0;
  this.hitChance = this.stats.dex / this.stats.ckn;
  this.attackPow = this.stats.str * this.stats.dex;
  this.defense = this.stats.str * .5;
}

export function Stats(health, str, dex, ckn, wil, cha) {
  this.health = health;
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
  let monstAttack = Math.floor(Math.random(monster.stats.attack) * 15);
  console.log("monstAttack" + monstAttack);
  let playerDefense = player.defense;
    if (monstAttack > playerDefense) {
      player.hp = player.hp - monstAttack;


    }


}
export function PlayerAttack(player, monster) {
  let playerAttack = Math.floor(Math.random(player.stats.playerAttack) * 15);
  console.log("playerAttack" + playerAttack);
  let monsterDefense = monster.stats.defense;
  if (playerAttack > monsterDefense) {
      monster.hp = monster.hp - playerAttack;

    } else{
      $('#playerSpeak').text("You Missed!");
    }
}

export function PlayerRest(player) {
  if (player.hp >= player.stats.health - 10) {
    player.hp = player.stats.health;
    alert("You can't be any more rested!")
  } else {
    player.hp = player.hp + 10;
  }
}

export function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
