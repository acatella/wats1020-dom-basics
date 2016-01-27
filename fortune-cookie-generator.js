
// Fortune Cookie Generator
// by Afi C. Clark


//Decides how many people need fortunes
var numberOfFortunes = 1;
function howManyAte(input) {
  numberOfFortunes = input;
  var options = document.getElementsByClassName("option");
  for (i = 0; i<options.length; i++) {
    options[i].className = "option btn pink";
    if (options[i].innerHTML == input) {
      options[i].className += " active";
    }
  }
}

var generateFortuneCookie = function(numAte) {
  //Do we need any more fortunes?
  if (numAte>0){
  //Create element to display and usedList
  var newFortuneElement = document.createElement("P");

  //Choose which fortune to use
    //Check to see if all fortunes have been shown
  if (fortuneList.length == 0) {
    //if so, build a new fortuneList array out of contents of usedList
    usedStr = usedList.join("~~");
    fortuneList = usedStr.split("~~");
    //clear the usedList array and previousFortunes list
    usedList.splice(0,usedList.length);
    previousFortunes.innerHTML = "";
  }
    //Get a random fortune using math.floor
  var fortuneNumber = Math.floor(Math.random() * fortuneList.length)
  var fortuneText = fortuneList[fortuneNumber];
    //Remove chosen fortune from fortuneList
  fortuneList.splice(fortuneNumber, 1);
    //Add chosen fortune to usedList
  usedList.push(fortuneText);

  //Add fortune text to the element, set ID
  newFortuneElement.setAttribute("id","js-fortuneText");
  newFortuneElement.innerHTML = fortuneText;

  //If this is a new set of fortunes, clear the list
  fortuneElement = document.getElementById("js-fortuneText");
  fortuneParent =document.getElementById("js-fortuneParent");
  if (numAte == numberOfFortunes) {
    while (fortuneParent.hasChildNodes()) {
      fortuneParent.removeChild(fortuneParent.firstChild);
    }
  }

  //add your new fortune to be displayed
  fortuneParent.appendChild(newFortuneElement);

  //Add new fortune element to previous fortunes list by creating LI w/ same text
  var newUsedFortune = document.createElement("LI");
  newUsedFortune.innerHTML = fortuneText;
  previousFortunes = document.getElementById("js-previousFortunes");
  previousFortunes.appendChild(newUsedFortune);

  //function calls itself until no more fortunes are needed
  generateFortuneCookie(numAte - 1);
}
}

// Data lists
var usedList = [];
var fortuneList = [
    "People are naturally attracted to you.",
    "You learn from your mistakes... You will learn a lot today.",
    "Ain't nothing to it but to do it!",
    "If you have something good in your life, don't let it go!",
    "What ever you're goal is in life, embrace it visualize it, and for it will be yours.",
    "Your shoes will make you happy today.",
    "You cannot love life until you live the life you love.",
    "Be on the lookout for coming events; They cast their shadows beforehand.",
    "Land is always on the mind of a flying bird.",
    "The man or woman you desire feels the same about you.",
    "Meeting adversity well is the source of your strength.",
    "A dream you have will come true.",
    "Our deeds determine us, as much as we determine our deeds.",
    "Never give up. You're not a failure if you don't give up.",
    "You will become great if you believe in yourself.",
    "There is no greater pleasure than seeing your loved ones prosper.",
    "You will marry your lover.",
    "The greatest love is self-love.",
    "A very attractive person has a message for you.",
    "You already know the answer to the questions lingering inside your head.",
    "It is now, and in this world, that we must live.",
    "You must try, or hate yourself for not trying.",
    "You can make your own happiness.",
    "The greatest risk is not taking one.",
    "The love of your life is stepping into your planet this summer.",
    "Love can last a lifetime, if you want it to.",
    "Adversity is the parent of virtue.",
    "Serious trouble will bypass you.",
    "A short stranger will soon enter your life with blessings to share.",
    "Now is the time to try something new.",
    "Wealth awaits you very soon.",
    "If you feel you are right, stand firmly by your convictions.",
    "If winter comes, can spring be far behind?",
    "Keep your eye out for someone special.",
    "You are very talented in many ways.",
    "A stranger, is a friend you have not spoken to yet.",
    "A new voyage will fill your life with untold memories.",
    "You will travel to many exotic places in your lifetime.",
    "Your ability for accomplishment will follow with success.",
    "Nothing astonishes men so much as common sense and plain dealing.",
    "Its amazing how much good you can do if you dont care who gets the credit.",
    "Everyone agrees. You are the best.",
    "LIFE CONSISTS NOT IN HOLDING GOOD CARDS, BUT IN PLAYING THOSE YOU HOLD WELL.",
    "Jealousy doesn't open doors, it closes them!",
    "It's better to be alone sometimes.",
    "When fear hurts you, conquer it and defeat it!",
    "Let the deeds speak.",
    "You will be called in to fulfill a position of high honor and responsibility.",
    "The man on the top of the mountain did not fall there.",
    "You will conquer obstacles to achieve success.",
    "Joys are often the shadows, cast by sorrows.",
    "Fortune favors the brave."
]
