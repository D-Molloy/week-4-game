
$(document).ready(function() {
  
  //create objects for each of the combatants and their traits
  var jonSnow = {
    name:"Jon Snow",
    health: 200,
    baseAttack: 6,
    attackPower: 6,
    counterAttack: 20,
    playerClass: ".snow-div",
  };

  var briTarth = {
    name:"Brienne of Tarth",
    health: 180,
    baseAttack: 10,
    attackPower: 10,
    counterAttack: 13,
    playerClass: ".tarth-div",
  };

  var oberyn = {
    name:"Oberyn Martell",
    health: 160,
    baseAttack: 12,
    attackPower: 12,
    counterAttack: 15,
    playerClass: ".oberyn-div",
  };

  var king = {
    name:"The Night King",
    health: 200,
    baseAttack: 8,
    attackPower: 8,
    counterAttack: 15,
    playerClass: ".night-king-div",
  };

  //global variables
  var userFighter;
  var enemyFighter;
  var winCount = 0;
  var chickenDinner = true;
  var audioElement = document.createElement("audio");

  //the function that runs once the user character dies or all enemies are defeated
  function gameOver() {
    
    //play the GoT theme
    audioElement.setAttribute("src", "assets/audio/theme.mp3");
    audioElement.play();
    
    //if the player loses, hide the arena and billboard divs and show the losing screen
    if (chickenDinner === false) {
      $('.arena').css('display', 'none');
      $('.billboard').css('display', 'none');
      $('.popup').hide().css({'margin-top': '10%', 'text-align': 'center'});
      $('.title-popup').css({'font-size':'40px', 'color':'red'}).html('You&nbsp  Have&nbsp  Perished...&nbspall&nbsp hope&nbsp is&nbsp lost&nbsp');
      $('.p-popup').text('click here to start a new game');
      $('.popup').fadeIn(6000);
    } else {
      
      //if the player wins, hide the arena and billboard divs and show the winning screen
      $('.arena').css('display', 'none');
      $('.billboard').css('display', 'none');
      $('.popup').hide().css({'margin-top': '10%', 'text-align': 'center'});
      $('.title-popup').css('font-size', '50px').html('The&nbsp  Iron&nbsp  Throne&nbsp  is&nbsp  yours');
      $('.p-popup').text('click here to start a new game');
      $('.popup').fadeIn(6000);
       
    }  
  }

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
  });

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
  });

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
  });

  // control adding The Night King to either user-img-div or enemy-img-div, printing stats to HTML and assigning to either userFighter or enemy fighter depending on the outcome of the if statement
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
  });

// decide what happens when the button is clicked
  $(".atk-btn").click(function() {
    
    //if both characters have been selected, execute the code below
    if (userFighter !== undefined && enemyFighter !== undefined){
      audioElement.setAttribute("src", "assets/audio/sword.wav");
      audioElement.play();
      
      //calculate user attack and damage done
      enemyFighter.health = enemyFighter.health - userFighter.attackPower;
      userFighter.attackPower = userFighter.attackPower + userFighter.baseAttack;
      $(".current-enemy-hp").text(enemyFighter.health);
      $(".current-user-atk").text(userFighter.attackPower);
      $(".user-text").text("You inflicted " + userFighter.attackPower + " damage on " + enemyFighter.name);
      
      // calculate enemy attack        
      userFighter.health = userFighter.health - enemyFighter.counterAttack;
      $(".current-user-hp").text(userFighter.health);
      $(".enemy-text").text(enemyFighter.name + " inflicted " + enemyFighter.counterAttack + " damage on you.");
      
      //if the user character runs out of health he will not get a chicken dinner and gameOver() is called
      if (userFighter.health <= 0) {
        chickenDinner = false;
        gameOver();
      } else if (enemyFighter.health <= 0){
        
        //if the enemy character is killed, remove it from the enemy-fighter div, play the Wilhelm scream, set enemyFighter to undefined(allowing the user to select a new enemy), prompt the user to pick a new character, and increment winCount, also the user earns a chicken dinner (chickenDinner stays == true)
        audioElement.setAttribute("src", "assets/audio/scream.mp3");
        audioElement.play();      
        $(enemyFighter.playerClass).detach();
        $(".current-enemy-hp").text(" ");
        $(".current-enemy-atk").text(" ");
        $(".select-champ").text("Select your next opponent");
        $(".user-text").text(" ");
        $(".enemy-text").text("");
        enemyFighter = undefined;
        winCount++;
        
        // if winCount === 3 then all opponents have been defeated and gameOver() is called
        if (winCount == 3){
          gameOver();
        }
      }     
    }
  });
});