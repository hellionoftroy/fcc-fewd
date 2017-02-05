// quote library
var quotes = [
   ["'I thought to myself: I am wiser than this man; neither of us probably knows anything that is really good, but he thinks he has knowledge, when he has not, while I, having no knowledge, do not think I have.' - Socrates, Plato\'s Apology"],
   ["'He could not harm me, for I do not think it is permitted that a better man be harmed by a worse.' - Socrates, Plato\'s Apology"],
   ["'My plainness of speech makes them hate me, and what is their hatred but a proof that I am speaking the truth.' - Socrates, Plato\'s Apology"],
   ["'Now the hour to part has come. I go to die, you go to live. Which of us goes to the better lot is known to no one.' - Socrates, Plato\'s Apology"],
   ["'Beware lest you lose the substance by grasping at the shadow.' - Aesop"],
   ["'Let them hate, so long as they fear.' - Aecius"],
   ["'Old age by nature is rather talkative.' - Cicero"],
   ["'Old men are only walking hospitals.' - Horace"],
   ["'Oh, this age! How tasteless and ill-bred it is.' - Catullus"],
   ["'I could do without your face, Chloe, and without your neck, and your hands, and your limbs, and, to save myself the trouble of mentioning the points in detail, I could do without you altogether.' - Martial"],
   ["'Everything you say is so unbearably boring, by Hercules, that it's murder by monotony.' - Plautus"],
   ["'No one thinks you're worth his attention, his time, a vote, a place in society, or even the light of day.' - Cicero"],
   ["'He hasn't got the brains of a sleeping two-year-old rocked in the rook of his father's arm.' - Catallus"],
   ["'All you do is run back and forth with a stupid expression, jittery as a rat in a roasting pot.' - Petronius"],
   ["'You are the stench of a low-life latrine.' - Apuleius"],
   ["'His mind is one vast wasteland.' - Sallust"],
   ["'You pretend you are one of the big boys.' - Horace"],
   ["'He makes a noise like a rooster nagging his hen.' - Juvenal"],
   ["'Are you still snoring? Is your slack head almost snapped on its stalk, with your face unzipped by the yawns earned in yesterday's debaucheries? Do you have any goals in life? Is there any point to your life?' - Persius"],
   ["'I have hardly ever known a mathematician who was capable of reasoning.' - Plato"],
   ["'I only wish I may see your head stroked down with a slipper.' - Terence"],
   ["'It's easy to be brave from a safe distance.' - Aesop"],
   ["'It is foolish to tear one’s hair in grief, as though sorrow would be made less by baldness.' - Cicero"],
   ["'Politicians are not born; they are excreted.' - Cicero"],
   ["'It is the peculiar quality of a fool to perceive the faults of others and to forget his own.' - Cicero"],
   ["'Weep, you girls.  My penis has given you up.  Now it penetrates men’s behinds.  Goodbye, wondrous femininity!' - Graffiti on wall in Pompeii"],
   ["'Restituta, take off your tunic, please, and show us your hairy privates.' - Graffiti on wall in Pompeii"],
   ["'Lesbianus, you defecate and you write, Hello, everyone!’ - Graffiti on wall in Pompeii"],
   ["'Theophilus, don’t perform oral sex on girls against the city wall like a dog.' - Graffiti on wall in Pompeii"],
   ["'Chie, I hope your hemorrhoids rub together so much that they hurt worse than when they every have before!' - Graffiti on wall in Pompeii"],
   ["'The one who buggers a fire burns his penis.' - Graffiti on wall in Pompeii"]
];

function randomQuote(){
   var random = Math.floor(Math.random()* (quotes.length) + 0);
   return "<p>" + quotes[random] + "</p>";
}

$(document).ready(function() {
   $("#getRandomQuote").on("click", function(){
   $("#randomQuote").html(randomQuote());
   });
});

// tweet the quote
function tweetIt () {
// FIX THIS PART -------------------------->
// truncate tweets over 140 characters

    
    //We want to save room for the author's name, an em dash to separate the quote from the author, and elipses if we need to truncate the quote.  I've chosen to just build a 10-character buffer above and beyond the length of the author's name because it makes the code easier, and I don't need to bump right up to the 140 character limit.
    var authorLength=currentAuthor.length+10;
    tweetToUse = currentQuote;
    //Check to see if the length minus the room we're saving for the attribution is too long.
    if (currentQuote.length > 140 -authorLength){
      var cutHere=140-authorLength;
  //Starting at the maximum length of the tweet and working back, look for a space so we don't add our elipses in the middle of a word.
while (currentQuote.slice(cutHere-1,cutHere) != (" ")){
             cutHere --;   
          }; 
//slice the quote and add elipses
      tweetToUse = currentQuote.slice(0,cutHere)+ "...";
    };   
    
    tweetToUse ="\'" + tweetToUse + "\'"  + currentAuthor;
  };


// TO THIS PART <--------------------------


  var phrase = document.getElementById('randomQuote').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    encodeURIComponent(phrase) +
    '&url=' +
    'http://codepen.io/hellionoftroy/full/dNOaaO/';
    
  window.open(tweetUrl);
}

 
   



 