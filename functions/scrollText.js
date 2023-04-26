var greetings = [ "Gabe figured out scrolling text!", 
"232 is very boring", 
"I'm not ready for finals :(", 
"Coding is fun (help)", 
"Hopefully this website looks decent", 
"I've run out of ideas for this", 
"Wait i figured out a new idea"
];

var seconds = 10;

var time = seconds * 1000;

//Maybe this is clearer for you...
setInterval(changeText, time);

function changeText() 
{
    var greeting_id = Math.floor(Math.random() * greetings.length);
    document.getElementById('breakingNews').innerHTML = "Breaking News: " + greetings[greeting_id];
}
