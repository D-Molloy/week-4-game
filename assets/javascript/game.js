// var jonSnow = {
//   name:"Jon Snow",
//   health: 200,
//   attackPower: 5,
//   counterAttack: 20,
// };

// var BriTarth = {
//   name:"Brienne of Tarth",
//   health: 100,
//   attackPower: 10,
//   counterAttack: 30,
// };


// console.log(jonSnow.health);




$(document).ready(function() {

var jonSnow = {
  name:"Jon Snow",
  health: 200,
  attackPower: 5,
  counterAttack: 20,
};

var BriTarth = {
  name:"Brienne of Tarth",
  health: 100,
  attackPower: 10,
  counterAttack: 30,
};

var userFighter;
var enemyFighter;

      // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "assets/audio/theme.mp3");

      // Play and pause the theme by clicking on the main and subtitle respectively
      $(".main-title").click( function() {
        audioElement.play();
      });

       $(".sub-title").click( function() {
        audioElement.pause();
      });

       $(".snow-div").click(function() {

          if (userFighter == undefined) {
            $(".snow-div").appendTo( $(".user-img-div"));
            $(".current-user-hp").text(jonSnow.health);
            $(".current-user-atk").text(jonSnow.attackPower);
            userFighter = jonSnow;
          console.log(userFighter);
          } else if (enemyFighter == undefined ) {
            $(".snow-div").appendTo( $(".enemy-img-div"));
            $(".enemy-user-hp").text(jonSnow.health);
            $(".enemy-user-atk").text(jonSnow.counterAttack);
            enemyFighter = jonSnow;

          } 
       })

 });