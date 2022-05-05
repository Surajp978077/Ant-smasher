let divid;
let antid = 5;
let beeid = 50;
let finalScore = 0;
let decision;
var intrvl = null;
let life;
function antGenerator() {
  divid = Math.floor(Math.random() * 4) + 1;
  var img = document.createElement("img");
  img.src = "Images/ants.png";
  antid += 1;
  // img.setAttribute("id", antid)
  img.setAttribute("class", "ant")
  img.setAttribute("onclick", "remove(this)")
  img.setAttribute("onanimationend", "dec_life()")
  var div = document.getElementById(divid);
  div.appendChild(img);
  img.setAttribute('draggable', 'false');
  // document.getElementById("antid").addEventListener('animationend', end); 
  

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
  var div = document.getElementById(divid);
  div.appendChild(img1);
  img1.setAttribute('draggable', 'false');
}

document.getElementById("button").addEventListener("click", start);
document.getElementById("bttn").addEventListener("click", start);

function remove(el) {
  finalScore += 2
  var element = el;
  // element.style.animationPlayState='paused';
  element.remove();
}

var playtime;

function start() {
  life=3;
  // let tagname=document.getElementsByTagName("img");
  // tagname.array.forEach(element => {
    
  // });
  
  document.getElementById("result").style.display = "none";
  document.getElementsByClassName("start")[0].style.display = "none";
  decision = Math.floor(Math.random() * 100) + 1;
  if (decision < 85) {
    antGenerator()
  } else {
    beeGenerator()
  }
  //   if(score==20){
  //     lvl2();
  //   }
  //   else{
  playtime = setTimeout(start, 1000);
  // }
  document.getElementById("score").innerHTML = finalScore;
  document.getElementById("liveScore").innerHTML = finalScore;
  document.getElementById("mobileScore").innerHTML = finalScore;
}
 function fulllife(){
  var img2 = document.createElement("img");
  img.src = "Images/heart.png";
  var lifediv = document.getElementById('life');
  lifediv.appendChild(img2);
  lifediv.appendChild(img2);
  lifediv.appendChild(img2);
 }
function dec_life(){
  life--;
  var img2 = document.createElement("img");
  img.src = "Images/heart.png";
  if(life==0){
    end();
  }
}

function end() {
  document.getElementById("result").style.display = "block";
  clearTimeout(playtime);
}

