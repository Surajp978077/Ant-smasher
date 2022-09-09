let divid;
let antid = 5;
let beeid = 50;
var finalScore;
var decision;
var intrvl = null;
var life;
var lvl;
var playtime;

// Event listeners for start and retry buttons
document.getElementById("button").addEventListener("click", start);
document.getElementById("bttn").addEventListener("click", start);

// Function to start the game
function start() {
  fulllife();
  lvl = 1;
  finalScore = 0;
  life = 3;
  document.getElementById("result").style.display = "none";
  document.getElementsByClassName("start")[0].style.display = "none";
  document.getElementById("score").innerHTML = finalScore;
  document.getElementById("mobileScore").innerHTML = finalScore;
  gameplay();
}

// Fill the life bar at the start of the game with 3 lives
function fulllife() {
  var img2, lifediv
  for (let i = 1; i <= 3; i++) {
    img2 = document.createElement("img");
    img2.src = "./heart.png";
    lifediv = document.getElementById('life');
    lifediv.appendChild(img2);
  }
}

// Decides the players level based on the score 
function gameplay() {
  if (finalScore < 10) {
    lvl = 1;
    document.getElementById('level').innerHTML = "LEVEL 1";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 85) {
      antGenerator();
    } else {
      beeGenerator();
    }
    // level1();
    playtime = setTimeout(gameplay, 3000);
  }
  else if (finalScore >= 10 & finalScore < 26) {
    lvl = 2;
    document.getElementById('level').innerHTML = "LEVEL 2";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 85) {
      antGenerator();
    } else if (decision > 85 & decision < 95) {
      beeGenerator();
    } else {
      lifegenerator();
    }
    playtime = setTimeout(gameplay, 3000);
  }
  else if (finalScore >= 26 & finalScore < 46) {
    lvl = 3;
    document.getElementById('level').innerHTML = "LEVEL 3";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 75) {
      antGenerator();
    } else if (decision > 75 & decision < 95) {
      beeGenerator();
    } else {
      lifegenerator();
    }
    playtime = setTimeout(gameplay, 2000);
  }
  else if (finalScore >= 46 & finalScore < 70) {
    lvl = 4;
    document.getElementById('level').innerHTML = "LEVEL 4";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 70) {
      antGenerator();
    } else if (decision > 70 & decision < 93) {
      beeGenerator();
    } else {
      lifegenerator();
    }
    playtime = setTimeout(gameplay, 2000);
  }
  else if (finalScore >= 70 & finalScore < 94) {
    lvl = 5;
    document.getElementById('level').innerHTML = "LEVEL 5";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 65) {
      antGenerator();
    } else if (decision > 65 & decision < 90) {
      beeGenerator();
    } else {
      lifegenerator();
    }
    playtime = setTimeout(gameplay, 1000);
  }
  else if (finalScore >= 94 & finalScore < 118) {
    lvl = 6;
    document.getElementById('level').innerHTML = "LEVEL 6";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 65) {
      antGenerator();
    } else if (decision > 65 & decision < 90) {
      beeGenerator();
    } else {
      lifegenerator();
    }
    playtime = setTimeout(gameplay, 800);
  }
  else if (finalScore >= 118 & finalScore < 148) {
    lvl = 7;
    document.getElementById('level').innerHTML = "LEVEL 7";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 65) {
      antGenerator();
    } else if (decision > 65 & decision < 87) {
      beeGenerator();
    } else {
      lifegenerator();
    }
    playtime = setTimeout(gameplay, 500);
  }
  else {
    lvl = 8;
    document.getElementById('level').innerHTML = "LEVEL 8";
    decision = Math.floor(Math.random() * 100) + 1;
    if (decision < 65) {
      antGenerator();
    } else if (decision > 60 & decision < 85) {
      beeGenerator();
    } else {
      lifegenerator();
    }
    playtime = setTimeout(gameplay, 200);
  }
}

// Checks level to change the animation duration 
function chklvl(id) {
  switch (lvl) {
    case 1:
      id.setAttribute("style", "animation-duration: 8s");
      break;
    case 2:
      id.setAttribute("style", "animation-duration: 7s");
      break;
    case 3:
      id.setAttribute("style", "animation-duration: 6s");
      break;
    case 4:
      id.setAttribute("style", "animation-duration: 6s");
      break;
    case 5:
      id.setAttribute("style", "animation-duration: 5s");
      break;
    case 6:
      id.setAttribute("style", "animation-duration: 4s");
      break;
    case 7:
      id.setAttribute("style", "animation-duration: 4s");
      break;
    default:
      id.setAttribute("style", "animation-duration: 3s");
      break;
  }
}

// Generate ants in random div 
function antGenerator() {
  divid = Math.floor(Math.random() * 4) + 1;
  var img = document.createElement("img");
  img.src = "./ants.png";
  antid += 1;
  img.setAttribute("class", "ant")
  img.setAttribute("onclick", "remove(this)")
  img.setAttribute("onanimationend", "dec_life()")
  chklvl(img);
  var div = document.getElementById(divid);
  div.appendChild(img);
  img.setAttribute('draggable', 'false');
}


// Generate bees in random div
function beeGenerator() {
  divid = Math.floor(Math.random() * 4) + 1;
  var img1 = document.createElement("img");
  img1.src = "./bee.png";
  beeid++;
  img1.setAttribute("id", beeid)
  img1.setAttribute("onclick", "end()")
  chklvl(img1);
  var div = document.getElementById(divid);
  div.appendChild(img1);
  img1.setAttribute('draggable', 'false');
}


// Generate life in random div
function lifegenerator() {
  divid = Math.floor(Math.random() * 4) + 1;
  var newheart = document.createElement("img");
  newheart.src = "./heart.png";
  newheart.setAttribute("onclick", "increaselife(this)")
  chklvl(newheart);
  var div = document.getElementById(divid);
  div.appendChild(newheart);
  newheart.setAttribute('draggable', 'false');
}


//  Removes the Ant, Bee and heart when clicked on them
function remove(el) {
  finalScore += 2
  var element = el;
  element.remove();
  // Upadating the score 
  document.getElementById("score").innerHTML = finalScore;
  document.getElementById("mobileScore").innerHTML = finalScore;
}


// Increase life by 1 everytime players gets heart  
function increaselife(heartid) {
  life++;
  var element = heartid;
  heartid.remove();
  var img5 = document.createElement("img");
  img5.src = "./heart.png";
  var lifediv = document.getElementById('life');
  lifediv.appendChild(img5);
}

// Decrease life by one everytime the user misses a Ant 
function dec_life() {
  if (life <= 0) {
    console.log('done23')
    end();
  } else {
    let list = document.getElementById('life');
    list.removeChild(list.firstElementChild);
    life -= 1;
  }
}

// End the game when lives get depleted or player clicks on the bee 
function end() {
  document.getElementById("result").style.display = "block";
  clearTimeout(playtime);
  var list1 = document.getElementById('life');
  var child = list1.lastElementChild;
  // let del = document.getElementsByClassName('ant')
  // del.length=0
  while (child) {
    list1.removeChild(child);
    child = list1.lastElementChild;
  }
}

