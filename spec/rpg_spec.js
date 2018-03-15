import { Player, Stats, MonsterStats, Monster, Item, EquippedAtk} from './../src/game.js';

describe("Character Creation", function(){
  it ("should make a player character object with health, mana, different stats", function(){
    let testStats = new Stats(5,5,5,5,5);
    let testPlayer = new Player("Chris", testStats);

    expect(testPlayer.hp).toEqual(7.5);
    expect(testPlayer.name).toEqual("Chris");
  })
})

describe("Monster Creation", function(){
  it("should make a monster object with a name and stats", function(){
    let testMonsterStats = new MonsterStats(10, 20, 10, 10);
    let testMonster = new Monster("Bob", testMonsterStats, "100 Gold");

    expect(testMonster.hp).toEqual(10);
    expect(testMonster.name).toEqual("Bob");
  })
})

describe("Item Creation", function(){
  it("should create an item that the player can use with unique stats", function(){
    let testItem = new Item("The Dragon Slayer Spatula", 10, 10, "Glows with blue fire", 100);

    expect(testItem.name).toEqual("The Dragon Slayer Spatula");
  })
})

describe("Item Assignment to Player", function(){
  it("should give a player an item by pushing it into an inventory array, and that item should modify attack power", function(){
    let testStats = new Stats(5,5,5,5,5);
    let testPlayer = new Player("Bob", testStats);
    let testItem = new Item("The Almighty Burger", 10, 10, "Sizzles with magical juices", 1000);
    testPlayer.inventory.push(testItem);
    testPlayer.equipped.push(testItem);
    EquippedAtk(testPlayer);

    expect(testPlayer.inventory[0]).toEqual(testItem);
    expect(testPlayer.attackPow).toEqual(35);
  })
})
