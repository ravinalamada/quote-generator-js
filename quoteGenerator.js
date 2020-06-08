 console.log('it works!');

// I creat an Array which is inside of object in order to store these strings.

           let quote1 = [ "Start by doing what's necessary","then what's possible","and suddenly you are doing the impossible."]

	       let quote2 = ["Believe you can and you're halfway there.","Believe you can and you're halfway there.","Theodore Roosevelt"]
	    
           let quote3 = ["It does not matter how slowly you go as long as you do not stop.","Believe you can and you're halfway there", "Theodore Roosevelt"]
    

     //I creat a function in order to conctenate the strings

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

    // Creat a function
      function genQuotesNum() {

    //1. I creat prompt in order to interact with a user and choose number of quotes generated (from 1 to 5)
    let quotesNumber = prompt("Choose your number of quotes here,'1' ");

    //2. check if the prompt give us something between 1 and 5
            if (quotesNumber > 1 && quotesNumber < 5) {

    //3. Generate a loop in order to last the number of times that the user entered in the prompt.            
                for (let i = 0; i < quotesNumber; i++) {
                    let randomIndex1 = Math.floor((Math.random() * (quote1.length)));
                    let randomIndex2 = Math.floor((Math.random() * (quote2.length)));
                    let randomIndex3 = Math.floor((Math.random() * (quote3.length)));
                    let string1 = quote1[randomIndex1];
                    let string2 = quote2[randomIndex2];
                    let string3 = quote3[randomIndex3];
                 console.log(`${string1}, ${string2},${string3}`)   
                };
           }else {
            return "Not a valid number"
        };
}genQuotesNum();



/* Choose between 2 types of quotation generators (you should therefore have 2 sets of sentences)

Once the quotes have been generated, offer to generate new quotes or stop the program there

Adapt the program so that it can offer these features. It's your turn !*/

// Second type of the exercise

    let newQuote1 = ["Let's have a break", "I have been waiting for that for a long time"];
    let newQuote2 = ['Bravo, you got this', 'Yep, as you see'];
    let newQuote3 = ["Let's have a break", "I have been waiting for that for a long time"]

    // Let's have another function 

    function optionQuoteGen() {

    // GEnerate a prompt in order to ask the user which type of quotation they want to use   
        let quotestypes = prompt("Choose your type of quotes here");

            if (quotestypes < 2) {
                let otherRandoIndex1 = Math.floor((Math.random() * (newQuote1.length)));
                let newString1 = newQuote1[otherRandoIndex1];
                console.log(`${newString1}`)
            }else if(quotestypes >= 2) {
                let otherRandomIndex2 = Math.floor((Math.random() * (newQuote2.length)));
                let newString2 = newQuote2[otherRandomIndex2];
                let otherRandomIndex3 = Math.floor((Math.random() * (newQuote3.length)));
                let newString3 = newQuote3[otherRandomIndex3];
                console.log(`${newString2}, ${newString3}`);
            };  

    }optionQuoteGen();

