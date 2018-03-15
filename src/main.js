import { Player, Stats, MonsterStats, Monster, Item, EquippedAtk, EquippedDef, MonsterAttack, PlayerAttack, wait, PlayerRest} from './../src/game.js';

import './styles.css';

import $ from 'jquery';

$(document).ready(function(){
  let jairoHitDescriptions = ["I AM JAIRO","BRAZIL!", "PONYTAIL!"];
  let randyHitQuotes = ["I have weak ankles...", "I was just punched in the face by your harsh words!"]
  let playerHitDescriptions = ["Your ass is grass and I'm gonna mow it!", "Time for the charm bomb to explode!", "I’m no hero, I put my bra on one boob at a time like everyone else.", "Oh, I swear to god, if you keep talking I'm gonna gut punch you!", "Everybody hates you.", "Yeah, calm it hussy!", "Oh my god. Why do you talk so slow...", "Why don't you try speaking in words, instead of your damn dirty lies!", "This is going to be the longest hour of my life!"];
  let playerDeathQuotes = ["If you need me I’ll be down here on the floor dying."];

  $('#fight-screen').hide();
  $('#enemy-fight').hide();
  let bobStats = new Stats(100,10,2,8,2,3);
  let Bob = new Player("Bob", bobStats);
  let tinaStats = new Stats(100,4,7,4,10,0);
  let Tina = new Player("Tina", tinaStats);
  let louiseStats = new Stats(100,2,8,2,3,10);
  let Louise = new Player("Louise", louiseStats);
  let lindaStats = new Stats(100,2,2,1,8,10);
  let Linda = new Player("Linda", lindaStats);
  let geneStats = new Stats(100,10,0,5,0,10);
  let Gene = new Player("Gene", geneStats);
  let selectedPlayer;
  let selectedMonster;
  let glasses = new Item("Butt detecting glasses", 10, 10, "No butt is safe.", 100);
  let tongs = new Item("Tongs of woe", 10, 10, "When grasped by these sacred tongs, there is no escape...", 100);
  let bunnyHat = new Item("Bunny Ears", 10, 10, "Fills the wearer with the confidence to push on.", 100);
  let spatula = new Item("The Dragon Slayer Spatula", 10, 10, "Glows with blue fire", 100);
  let keyboard = new Item("Casio SK5", 10, 10, "This keyboard's beautiful fart sounds will soothe even the most horrible wounds.", 100);
  let camera = new Item("Video Camera", 10, 10, "This camera contains strange and unusual videos of a cow.", 100);
  let PonyTail = new Item("Jairo's Ponytail", 10, 10, "Gross", 1);
  let jairoStats = new MonsterStats(50,10,3,3);
  let Jairo = new Monster("Jairo", jairoStats, PonyTail);
  let randyStats = new MonsterStats(50,10,3,3);
  let Randy = new Monster("Randy", randyStats, camera);
  $('#heroSelect').submit(function(event){
    event.preventDefault();
    if ($('#select').val() === "BOB") {
      selectedPlayer = Bob;
      Bob.equipped.push(spatula);
      $('#creation').hide();
      $('#fight-screen').show();
    } else if ($('#select').val() === "LINDA") {
      selectedPlayer = Linda;
      Linda.equipped.push(tongs);
      $('#creation').hide();
      $('#fight-screen').show();
    } else if ($('#select').val() === "LOUISE") {
      selectedPlayer = Louise;
      Louise.equipped.push(bunnyHat);
      $('#creation').hide();
      $('#fight-screen').show();
    } else if ($('#select').val() === "TINA") {
      selectedPlayer = Tina;
      Tina.equipped.push(glasses);
      $('#creation').hide();
      $('#fight-screen').show();
    } else if ($('#select').val() === "GENE") {
      selectedPlayer = Gene;
      Gene.equipped.push(keyboard);
      $('#creation').hide();
      $('#fight-screen').show();
    }
      console.log(selectedPlayer);
  });

$('#randy').click(function(){
  selectedMonster = Randy;
  $('#fight-screen').hide();
  $('#enemy-fight').show();
  $('#playerHealth').text(selectedPlayer.name + "'s Health: " + selectedPlayer.hp);
  $('#monsterHealth').text(selectedMonster.name + "'s Health: " + selectedMonster.hp);
})

$('#jairo').click(function(){
  selectedMonster = Jairo;
  $('#fight-screen').hide();
  $('#enemy-fight').show();
  $('#playerHealth').text(selectedPlayer.name + "'s Health: " + selectedPlayer.hp);
  $('#monsterHealth').text(selectedMonster.name + "'s Health: " + selectedMonster.hp);
})

$('#playerRest').click(function(){
  PlayerRest(selectedPlayer);
  $('#playerHealth').text(selectedPlayer.name + "'s Health: " + selectedPlayer.hp);
  wait(1000);
  MonsterAttack(selectedPlayer, selectedMonster)
  $('#monsterHealth').text(selectedMonster.name + "'s Health: " + selectedMonster.hp);
})

$('#playerAttack').click(function(){

  EquippedAtk(selectedPlayer);
  PlayerAttack(selectedPlayer, selectedMonster);
  $('#playerSpeak').text(playerHitDescriptions[Math.floor(Math.random()*playerHitDescriptions.length)]);
  $('#monsterHealth').text(selectedMonster.name + "'s Health: " + selectedMonster.hp);
  if (selectedMonster.hp <= 0) {
    $('#enemy-fight').hide();
    $('#randy-death').show();
  } else if (selectedPlayer.hp <= 0) {
    $('#enemy-fight').hide();
    $('#player-death').show();
  } else {
    wait(1000);

    console.log("enemy attack");
    if (selectedMonster === Jairo) {
      $('#monsterSpeak').text(jairoHitDescriptions[Math.floor(Math.random()*jairoHitDescriptions.length)]);
    } else if (selectedMonster === Randy){
      $('#monsterSpeak').text(randyHitQuotes[Math.floor(Math.random()*randyHitQuotes.length)]);
    }
    MonsterAttack(selectedPlayer, selectedMonster);
      $('#playerHealth').text(selectedPlayer.name + "'s Health: " + selectedPlayer.hp);
    }
  })





})
