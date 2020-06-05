 console.log('it works!');

// I creat an Array which is inside of object in order to store these strings.

           let quote1 = [ "Start by doing what's necessary","then what's possible","and suddenly you are doing the impossible."]

	       let quote2 = ["Believe you can and you're halfway there.","Believe you can and you're halfway there.","Theodore Roosevelt"]
	    
           let quote3 = ["It does not matter how slowly you go as long as you do not stop.","Believe you can and you're halfway there", "Theodore Roosevelt"]
    

    // I creat a function in order to conctenate the strings

    function quotesGen() {
        let randomNumber1 = Math.floor((Math.random() * (quote1.length)));
        let newRandomNumber1 = quote1[randomNumber1];
    
        let randomNumber2 = Math.floor((Math.random() * (quote2.length)));
        let newRandomNumber2 = quote2[randomNumber2];
    

        let randomNumber3 = Math.floor((Math.random() * (quote3.length)));
        let newRandomNumber3 = quote3[randomNumber3];

    //  console the code
    console.log(`${newRandomNumber1}, ${newRandomNumber2}, ${newRandomNumber3}`);
    };quotesGen();
    
   // I creat prompt in order to interact with a user and choose number of quotes generated (from 1 to 5)
   function newQuotesGen() { 
      let quotesNumber = prompt("Choose your number of quotes here,'1' ");

   if (quotesNumber !== null) {
        var randomNumber1 = Math.floor(Math.random() *  (quote1.length));
        var randomNumber2 = Math.floor(Math.random() *  (quote2.length));
        var randomNumber3 = Math.floor(Math.random() *  (quote3.length));
        var randomQuote = quote1[randomNumber1] + ` ` + quote2[randomNumber2] + ` ` + quote3[randomNumber3]
        for (let i = 0; i < 5; i++) {
            console.log(randomQuote) 
        };
    };
}newQuotesGen()
    // Choose 2 types of quotation generated 

    let newQuote1 = ["Let's have a break", "I have been waiting for that for a long time"];
    let newQuote2 = ['Bravo, you got this', 'Yep, as you see'];

    // Let's have another function

    function optionQuoteGen() {
        let quotesNumber = prompt("Choose your number of quotes here,'1' ");
        if (quotesNumber !== null) {
            var otherRandomNumber1 = Math.floor((Math.random() * (newQuote1.length)));
            var otherRandomNumber2 = Math.floor((Math.random() * (newQuote2.length)));
            var otherRandomQutes = newQuote1[otherRandomNumber1] + ' ' + newQuote2[otherRandomNumber2];
            console.log(otherRandomQutes);
        };    
    }optionQuoteGen();

