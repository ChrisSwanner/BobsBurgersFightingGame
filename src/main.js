import { Player, Stats, MonsterStats, Monster, Item, EquippedAtk, EquippedDef, MonsterAttack, PlayerAttack} from './../src/game.js';

import $ from 'jquery';

$(document).ready(function(){
  $('#fight-screen').hide();
  $('#randy-fight').hide();
  let bobStats = new Stats(10,2,8,2,3);
  let Bob = new Player("Bob", bobStats);
  let tinaStats = new Stats(4,7,4,10,0);
  let Tina = new Player("Tina", tinaStats);
  let louiseStats = new Stats(2,8,2,3,10);
  let Louise = new Player("Louise", louiseStats);
  let lindaStats = new Stats(2,2,1,8,10);
  let Linda = new Player("Linda", lindaStats);
  let geneStats = new Stats(10,0,5,0,10);
  let Gene = new Player("Gene", geneStats);
  let selectedPlayer;
  let glasses = new Item("Butt detecting glasses", 10, 10, "No butt is safe.", 100);
  let tongs = new Item("Tongs of woe", 10, 10, "When grasped by these sacred tongs, there is no escape...", 100);
  let bunnyHat = new Item("Bunny Ears", 10, 10, "Fills the wearer with the confidence to push on.", 100);
  let spatula = new Item("The Dragon Slayer Spatula", 10, 10, "Glows with blue fire", 100);
  let keyboard = new Item("Casio SK5", 10, 10, "This keyboard's beautiful fart sounds will soothe even the most horrible wounds.", 100);
  let camera = new Item("Video Camera", 10, 10, "This camera contains strange and unusual videos of a cow.", 100);
  let randyStats = new MonsterStats(3,3,3,3);
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
  $('#fight-screen').hide();
  $('#randy-fight').show();
})


})
