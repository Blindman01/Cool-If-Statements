// adding the id in the functuion perameters is how I am calling each button
//using javascript I am changing the background according to what button is pressed

function buttonPush(id) {
  if (id == "dl") {
    //in this case, when the Deathloop button is pushed the deathloop image will be selected and displayed
    document.body.style.backgroundImage = "url(./img/deathloop1.jpg)";
    //using else if allows this to work. just writing if would then go through all the statements and settle on the last one
  } else if (id == "tm") {
    document.body.style.backgroundImage = "url(./img/twistedmetal1.jpg)";
  } else if (id == "d2") {
    document.body.style.backgroundImage = "url(./img/dyinglight2.jpg)";
    //having else is the default if the other if statements don't work
  } else {
    document.body.style.backgroundImage = "url(./img/playstation.png)";
  }
  console.log(buttonPush);
  //use this bottom syntax if I want to change the background image for an element
  //document.getElementById("dl").body.style.backgroundImage = "url(img/deathloop1.jpg)";
}
