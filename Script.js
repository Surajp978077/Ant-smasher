let divid;
let antid = 5;
let beeid = 50;
var finalScore;
var decision;
var intrvl = null;
var life;
var lvl;
var playtime;


function antGenerator() {
  divid = Math.floor(Math.random() * 4) + 1;
  var img = document.createElement("img");
  img.src = "Images/ants.png";
  antid += 1;
  // img.setAttribute("id", antid)
  img.setAttribute("class", "ant")
  img.setAttribute("onclick", "remove(this)")
  img.setAttribute("onanimationend", "dec_life()")
  chklvl(img);
  // img.setAttribute("style", "animation-duration: 10s")
  var div = document.getElementById(divid);
  div.appendChild(img);
  img.setAttribute('draggable', 'false');


  // var elem = document.getElementById(antid);
  // // elem.style.display='none';
  // var pos = 0;
  // clearInterval(intrvl);
  // intrvl = setInterval(frame, 10);
  // function frame() {
  //   if (top=='90%' ) {
  //     clearInterval(intrvl);
  //   } else {
  //     pos ++;
  //     elem.style.top = pos + '%';
  //     // elem.style.left = pos + '%';
  //   }
  // }
}


function beeGenerator() {
  divid = Math.floor(Math.random() * 4) + 1;
  var img1 = document.createElement("img");
  img1.src = "Images/bee.png";
  beeid++;
  img1.setAttribute("id", beeid)
  img1.setAttribute("onclick", "end()")
  chklvl(img1);
  // img1.setAttribute("style.animationDuration", "1")
  var div = document.getElementById(divid);
  div.appendChild(img1);
  img1.setAttribute('draggable', 'false');
}

function lifegenerator() {
  divid = Math.floor(Math.random() * 4) + 1;
  var newheart = document.createElement("img");
  newheart.src = "Images/heart.png";
  newheart.setAttribute("onclick", "increaselife(this)")
  chklvl(newheart);
  var div = document.getElementById(divid);
  div.appendChild(newheart);
  newheart.setAttribute('draggable', 'false');

}

document.getElementById("button").addEventListener("click", start);
document.getElementById("bttn").addEventListener("click", start);
function chklvl(id) {
  if (lvl == 1) {
    id.setAttribute("style", "animation-duration: 10s");
  }
  else if (lvl == 2) {
    id.setAttribute("style", "animation-duration: 9s");
  }
  else if (lvl == 3) {
    id.setAttribute("style", "animation-duration: 8s");
  }
  else if (lvl == 4) {
    id.setAttribute("style", "animation-duration: 7s");
  }
  else if (lvl == 5) {
    id.setAttribute("style", "animation-duration: 6s");
  }
  else if (lvl == 6) {
    id.setAttribute("style", "animation-duration: 4s");
  }
  else if (lvl == 7) {
    id.setAttribute("style", "animation-duration: 3s");
  } else {
    id.setAttribute("style", "animation-duration: 2s");
  }
}
function remove(el) {
  finalScore += 2
  var element = el;
  element.remove();
}


function start() {
  fulllife();
  lvl = 1;
  finalScore = 0;
  life = 3;
  // let tagname=document.getElementsByTagName("img");
  // tagname.array.forEach(element => {

  gameplay();
  // });

  document.getElementById("result").style.display = "none";
  document.getElementsByClassName("start")[0].style.display = "none";
  //   if(score==20){
  //     lvl2();
  //   }
  //   else{
  // }
}

function scoreupdate() {
  document.getElementById("score").innerHTML = finalScore;
  // document.getElementById("liveScore").innerHTML = finalScore;
  document.getElementById("mobileScore").innerHTML = finalScore;
}

function gameplay() {
  if (finalScore < 10) {
    lvl = 1;
    document.getElementById('level').innerHTML = "LEVEL 1";
    level1();
    console.log('done');
  }
  // console.log('done1');
  else if (finalScore >= 10 & finalScore < 26) {
    console.log('entered');
    lvl = 2;
    document.getElementById('level').innerHTML = "LEVEL 2";
    level2();
  }
  else if (finalScore >= 26 & finalScore < 46) {
    lvl = 3;
    document.getElementById('level').innerHTML = "LEVEL 3";
    level3();
  }
  else if (finalScore >= 46 & finalScore < 70) {
    lvl = 4;
    document.getElementById('level').innerHTML = "LEVEL 4";
    level4();
  }
  else if (finalScore >= 70 & finalScore < 94) {
    lvl = 5;
    document.getElementById('level').innerHTML = "LEVEL 5";
    level5();
  }
  else if (finalScore >= 94 & finalScore < 118) {
    lvl = 6;
    document.getElementById('level').innerHTML = "LEVEL 6";
    level6();
  }
  else if (finalScore >= 118 & finalScore < 148) {
    lvl = 7;
    document.getElementById('level').innerHTML = "LEVEL 7";
    level7();
  }
  else {
    lvl = 8;
    document.getElementById('level').innerHTML = "LEVEL 8";
    level8();
  }
}

function level1() {
  console.log('hello');

  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 85) {
    antGenerator();
  } else {
    beeGenerator();
  }
  scoreupdate();

  playtime = setTimeout(gameplay, 3000);
}

function level2() {

  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 85) {
    antGenerator();
  } else if (decision > 85 & decision < 95) {
    beeGenerator();
  } else {
    lifegenerator();
  }
  scoreupdate();
  playtime = setTimeout(gameplay, 3000);
}

function level3() {
  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 75) {
    antGenerator();
  } else if (decision > 75 & decision < 95) {
    beeGenerator();
  } else {
    lifegenerator();
  }
  scoreupdate();
  playtime = setTimeout(gameplay, 2000);
}

function level4() {
  // lvl=4;
  // if (finalScore >= 70) {
  //   level5();
  // }
  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 70) {
    antGenerator();
  } else if (decision > 70 & decision < 93) {
    beeGenerator();
  } else {
    lifegenerator();
  }
  scoreupdate();
  playtime = setTimeout(gameplay, 2000);
}

function level5() {
  // lvl=5;
  // if (finalScore >= 94) {
  //   level6();
  // }
  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 65) {
    antGenerator();
  } else if (decision > 65 & decision < 90) {
    beeGenerator();
  } else {
    lifegenerator();
  }
  scoreupdate();
  playtime = setTimeout(gameplay, 1000);
}

function level6() {
  // lvl=6;
  // if (finalScore >= 118) {
  //   level7();
  // }
  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 65) {
    antGenerator();
  } else if (decision > 65 & decision < 90) {
    beeGenerator();
  } else {
    lifegenerator();
  }
  scoreupdate();
  playtime = setTimeout(gameplay, 800);
}

function level7() {
  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 65) {
    antGenerator();
  } else if (decision > 65 & decision < 87) {
    beeGenerator();
  } else {
    lifegenerator();
  }
  scoreupdate();
  playtime = setTimeout(gameplay, 500);
}

function level8() {
  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 65) {
    antGenerator();
  } else if (decision > 60 & decision < 85) {
    beeGenerator();
  } else {
    lifegenerator();
  }
  scoreupdate();
  playtime = setTimeout(gameplay, 200);
}


function fulllife() {
  var img2 = document.createElement("img");
  img2.src = "Images/heart.png";
  var lifediv = document.getElementById('life');
  lifediv.appendChild(img2);
  var img3 = document.createElement("img");
  img3.src = "Images/heart.png";
  lifediv.appendChild(img3);
  var img4 = document.createElement("img");
  img4.src = "Images/heart.png";
  lifediv.appendChild(img4);
}

function increaselife(heartid) {
  life++;
  var element = heartid;
  heartid.remove();
  var img5 = document.createElement("img");
  img5.src = "Images/heart.png";
  var lifediv = document.getElementById('life');
  lifediv.appendChild(img5);

}

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


function end() {
  document.getElementById("result").style.display = "block";
  clearTimeout(playtime);
  var list1 = document.getElementById('life');
  var child=list1.lastElementChild;
  while(child){
    list1.removeChild(child);
    child=list1.lastElementChild;
  }
}

