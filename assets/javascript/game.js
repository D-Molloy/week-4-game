
$(document).ready(function() {

  var jonSnow = {
    name:"Jon Snow",
    health: 1000,
    baseAttack: 5,
    attackPower: 5,
    counterAttack: 20,
    playerDiv: ".snow-div",
  };

  var briTarth = {
    name:"Brienne of Tarth",
    health: 100,
    baseAttack: 10,
    attackPower: 10,
    counterAttack: 30,
    playerDiv: ".tarth-div",
  };

  var oberyn = {
    name:"Oberyn Martell",
    health: 150,
    baseAttack: 20,
    attackPower: 20,
    counterAttack: 40,
    playerDiv: ".oberyn-div",
  };

  var king = {
    name:"The Night King",
    health: 150,
    baseAttack: 20,
    attackPower: 20,
    counterAttack: 20,
    playerDiv: ".night-king-div",
  };


  var userFighter;
  var enemyFighter;
  var winCount = 0;

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



  // control adding Brienne to either user-img-div or enemy-img-div, printing stats to HTML and assigning to either userFighter or enemy fighter depending on the outcome of the if statement
  $(".tarth-div").click(function() {
    if (userFighter == undefined) {
      $(".tarth-div").appendTo( $(".user-img-div"));
      $(".current-user-hp").text(briTarth.health);
      $(".current-user-atk").text(briTarth.attackPower);
      $(".select-champ").text("Choose a challenger.")
      userFighter = briTarth;
      console.log(userFighter);
    } else if (enemyFighter == undefined ) {
      $(".tarth-div").appendTo( $(".enemy-img-div"));
      $(".current-enemy-hp").text(briTarth.health);
      $(".current-enemy-atk").text(briTarth.counterAttack);
      $(".select-champ").text(" ")
      enemyFighter = briTarth;
    } 
  })


  // control adding Jon to either user-img-div or enemy-img-div, printing stats to HTML and assigning to either userFighter or enemy fighter depending on the outcome of the if statement
  $(".snow-div").click(function() {
    if (userFighter == undefined) {
      $(".snow-div").appendTo( $(".user-img-div"));
      $(".current-user-hp").text(jonSnow.health);
      $(".current-user-atk").text(jonSnow.attackPower);
      $(".select-champ").text("Choose a challenger.")
      userFighter = jonSnow;
      console.log(userFighter);
    } else if (enemyFighter == undefined ) {
      $(".snow-div").appendTo( $(".enemy-img-div"));
      $(".current-enemy-hp").text(jonSnow.health);
      $(".current-enemy-atk").text(jonSnow.counterAttack);
      $(".select-champ").text(" ")
      enemyFighter = jonSnow;
    } 
  })

  // control adding Oberyn to either user-img-div or enemy-img-div, printing stats to HTML and assigning to either userFighter or enemy fighter depending on the outcome of the if statement
  $(".oberyn-div").click(function() {
    if (userFighter == undefined) {
      $(".oberyn-div").appendTo( $(".user-img-div"));
      $(".current-user-hp").text(oberyn.health);
      $(".current-user-atk").text(oberyn.attackPower);
      $(".select-champ").text("Choose a challenger.")
      userFighter = oberyn;
      console.log(userFighter);
    } else if (enemyFighter == undefined ) {
      $(".oberyn-div").appendTo( $(".enemy-img-div"));
      $(".current-enemy-hp").text(oberyn.health);
      $(".current-enemy-atk").text(oberyn.counterAttack);
      $(".select-champ").text(" ")
      enemyFighter = oberyn;
    } 
  })

  // control adding The Night King to either user-img-div or enemy-img-div and updating stats
  $(".night-king-div").click(function() {
    if (userFighter == undefined) {
      $(".night-king-div").appendTo( $(".user-img-div"));
      $(".current-user-hp").text(king.health);
      $(".current-user-atk").text(king.attackPower);
      $(".select-champ").text("Choose a challenger.")
      userFighter = king;
      console.log(userFighter);
    } else if (enemyFighter == undefined ) {
      $(".night-king-div").appendTo( $(".enemy-img-div"));
      $(".current-enemy-hp").text(king.health);
      $(".current-enemy-atk").text(king.counterAttack);
      $(".select-champ").text(" ")
      enemyFighter = king;
    } 
  })


  // var userFighter enemyFighter= {
    // name:"The Night King",
    // health: 150,
    // baseAttack: 20,
    // attackPower: 20,
    // counterAttack: 20,
  // };

  // div class="billboard">
  // <p class="select-champ">Click to select a Champion</p>
  // <p class="user-text">User Attack Text</p>
  // <p class="enemy-text">Enemy Attack Text</p>

  $(".atk-btn").click(function() {
        if (userFighter !== undefined && enemyFighter !== undefined){

      //user attack
      enemyFighter.health = enemyFighter.health - userFighter.attackPower;
      userFighter.attackPower = userFighter.attackPower + userFighter.baseAttack;
      $(".current-enemy-hp").text(enemyFighter.health);
      $(".current-user-atk").text(userFighter.attackPower);
      $(".user-text").text("You inflicted " + userFighter.attackPower + " damage on " + enemyFighter.name);

      //enemy attack        
      userFighter.health = userFighter.health - enemyFighter.counterAttack;
      $(".current-user-hp").text(userFighter.health);
      $(".enemy-text").text(enemyFighter.name + " inflicted " + enemyFighter.counterAttack + " damage on you.");
      
      //monitor for a win or loss
      if (userFighter.health <= 0) {
        alert("You lose.");
        //create lose screen
      } else if (enemyFighter.health <= 0){
        //process a win        
        $(enemyFighter.playerDiv).detach();
        $(".current-enemy-hp").text(" ");
        $(".current-enemy-atk").text(" ");
        $(".select-champ").text(" ");
        $(".user-text").text(" ");
        $(".enemy-text").text("Select your next opponent");
        winCount++;
        if (winCount == 3){
          alert("You win.");
        }
        enemyFighter = undefined;
      }

      
    }

  })



});