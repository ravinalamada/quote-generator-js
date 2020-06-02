 console.log('it works!');

// I creat an Array which is inside of object in order to store these strings.
var quotesGenerator = {
            quote1: [ "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", "Start by doing what's necessary", "Francis of Assisi"],

	       quote2: ["Believe you can and you're halfway there.","Believe you can and you're halfway there.","Theodore Roosevelt"],
	    
            quote3: ["It does not matter how slowly you go as long as you do not stop.","Believe you can and you're halfway there.","Confucius"],

            quote4: ["Our greatest weakness lies in giving up.","The most certain way to succeed is always to try just one more time.","Thomas A. Edison"]
    };

    console.log(quotesGenerator);

    // I creat a function in order to conctenate the strings

    function newQuotesGen(quotes) {
        var quotesGenArray = [];
        for (let i = 0; i < quotes.length; i++) {
            if(quotes.length >= quotes[3]) {
               quotesGenArray.push(`${quotes[i]}`);
        };
    };
} 

    // I creat a prompt in order interact with a user

  let randomQoutes = prompt("Set your number of qoutes here");
  let randomQuotes = "";
  if (randomQuotes !== null){
    alert(`${randomQuotes}`)
};    
