function myFunction (){

var img = document.createElement("img");

    img.src = "ant.png";

var div = document.getElementById("1");

    div.appendChild(img);

}

document.getElementById("button").addEventListener("click", myFunction );
