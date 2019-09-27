var veryHungry = false;
var meets = false;
var h = false;
var t = false;

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="The Last Jedi"; // title

  document.getElementById('author').innerHTML="Aidan and Vyshon"; // author



  // All of your code goes under here


  var story = 'Ray goes to the island and ' + meet() + '. ' + delicious(); // Create the text
  var story2 = 'He says '+ help();
  var story3 = 'So they start to training. '+train();
  var story5 = 'The battle begins and after a while';
  printToPage(story); // Print the text to the webpage
   if(meets == false) {
     printToPage(story2)
   }


   if(h == false) {
     printToPage(story3)
   }
}




if(t == false) {
  printToPage(story5)
}

// Put your functions below here:

function meet() {
  let insp = random(1, 6);
  if(insp > 3) {
    meets = false;
    return "meets luke"

  } else {
    meets=true;
    return "doesnt meet luke"

  }
}

function delicious() {
  if(meets == false) {
    return "Ray asks if luke will help her.";
  } else {
    return "The End";
  }
}

function help() {
  let insp = random(1, 6);
  if(insp > 3) {
    return "yes, I will help."
  } else {
    return "no, I wont help. The End"
  }
}

function help() {
  let insp = random(1, 6);
  if(insp > 3) {
    (h==false)
    return "yes, I will help."
  } else {
    (h==true)
    return "no, I wont help. The End"
  }
}

function train() {
  let insp = random(1, 6);
  if(insp > 3) {
    (t==false)
    return "The training went well and Ray prepares for the battle."
  } else {
    (t==true)
    return "Luke does'nt train Ray right and she was not prepared and dies. The End"
  }
}


//Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}
