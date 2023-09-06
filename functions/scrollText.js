var greetings = [ "text1", 
"text2", 
"text3", 
"text4", 
"text5", 
"text6", 
"text7", 
"text8", 
"text9", 
"text10"
];

var msecs = 4000; //Milliseconds that will wait to change the text
var marq = document.getElementById("marq"); //The object
var pix = marq.clientWidth; //The width in the screen

//You have to vary this... If you know a little bit of maths they can help you.
marq.scrollAmount = (pix / (msecs / 50));

setInterval(function() 
{
    var greeting_id = Math.floor(Math.random() * greetings.length);
    document.getElementById('breakingNews').innerHTML = greetings[greeting_id];
}, msecs);